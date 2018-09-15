const { CryptoFactory} = require('sawtooth-sdk/signing')
const {createHash} = require('crypto')
const {protobuf} = require('sawtooth-sdk')

const AWS = require('aws-sdk');

const utils = require('./utils')
const transactionCreation = require('./transactionCreation')

class Accounts {
  constructor(db, mailer, context, batchSigner) {
    this.db = db
    this.mailer = mailer
    this.context = context
    this.batchSigner = batchSigner
  }

  async createAccount (req){
    const requiredFields = ['email', 'password']
    const reqData = JSON.parse(req)
    const privKey = this.context.newRandomPrivateKey()
    const signer = CryptoFactory(context).newSigner(privateKey)

    const pubKey = signer.getPublicKey()

    const authEntry = createAuth(req, pubKey, privKey).then(authEntry => console.log(authEntry))

    const account = {
      label: reqData.label,
      description: reqData.description,
      email: reqData.email,
      holdings: [],
      publicKey: pubKey
    }
    const { batches, batchId } = transactionCreation.createAccount(
      signer,
      batchSigner,

    )

  }

  save(email, callback) {
    const account = {
      email: email,
      created_at: Date.now()
    }

    this.db.saveAccount(user, function(err) {
      if (err){
        callback(err)
      } else {
        this.mailer.sendWelcomeEmail(email)
        callback()
      }
    })
  }

  async _createAuth(req, pubKey, privKey){
    const reqData = JSON.parse(req)
    const encryptedPrivKey = utils.encryptPrivKey(pubKey, privKey)
    const hashedPass = await bcrypt.hash(encodeURI(reqData.password), 10)

    const authEntry = {
      pubKey: pubKey,
      email: reqData.email,
      encryptedPrivKey: encryptedPrivKey,
      hashedPass: hashedPass
    }

    return authEntry
  }


}

module.exports = Accounts
const { CryptoFactory} = require('sawtooth-sdk/signing')
const {createHash} = require('crypto')
const {protobuf} = require('sawtooth-sdk')

const AWS = require('aws-sdk');

const utils = require('./utils')
const transactionCreation = require('./transactionCreation')
const encrypted = process.env['AES_KEY'];

class Accounts {
  constructor(context, batchSigner, ses, kms, kmsKey) {
    this.context = context
    this.batchSigner = batchSigner
    this.ses = ses
    this.kms = kms
    this.kmsKey = kmsKey
  }

  async createAccount (userAttributes){
    const requiredFields = ['email', 'password']
    console.log(userAttributes)
    const privKey = this.context.newRandomPrivateKey()
    const signer = CryptoFactory(context).newSigner(privateKey)

    const pubKey = signer.getPublicKey().asHex()
    let encryptedPrivKey
    this.kms.encrypt({ this.kmsKey, Buffer.from(privKey) }, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        const { CiphertextBlob } = data
        return CiphertextBlob
      }
    }).then( key => encryptedPrivKey = key)

    const account = {
      label: userAttributes.name,
      description: userAttributes.description,
      email: userAttributes.email,
      holdings: [],
      publicKey: pubKey,
      encryptedPrvKey: encryptedPrivKey
    }
    const { batches, batchId } = transactionCreation.createAccountTransaction(
      signer,
      batchSigner,
      userAttributes.name,
      userAttributes.email
    )
      return JSON.stringify(account)
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
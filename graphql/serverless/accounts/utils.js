const {createContext, CryptoFactory} = require('sawtooth-sdk/signing')
const {createHash} = require('crypto')
const {protobuf} = require('sawtooth-sdk')

const rule_pb = require('./protos/rule_pb')

const _batcherPrivKey = process.env.BATCHER_PRIVATE_KEY

const validateFields = (requiredFields, req) => {
  requiredFields.forEach(field => {
    if(req[field]  == null){
      console.log("field is required")
    }
  })
}
const createPrivKey = () => {
  const context = createContext('secp256k1')
  const privateKey = context.newRandomPrivateKey()
  const signer = CryptoFactory(context).newSigner(privateKey)
  return signer
}

const createSigner = () => {
  const context = createContext('secp256k1')
  const privateKey = context.newRandomPrivateKey()
  const signer = CryptoFactory(context).newSigner(privateKey)
  return signer
}

const getSigner = async (req) => {
  const email = deserializeAuthToken(req.token).email

}
const encryptPrivKey = (aesKey, pubKey, privKey) => {
  const context = createContext('secp256k1')
  const privateKey = context.newRandomPrivateKey()
}

const decryptPrivateKey = (aesKey, pubKey, encryptedPrivateKey) => {


}


const promisify = func => new Promise((resolve, reject) => {
  func((error, result) => {
    if(error) {
      reject(error)
    } else {
      resolve(result)
    }
  })
})

module.exports = {
  promisify,
  validateFields,
  createSigner,
  encryptPrivKey
}
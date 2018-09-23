'use strict';

const AWS = require('aws-sdk');
const {createContext, CryptoFactory} = require('sawtooth-sdk/signing')
const Accounts = require('accounts');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
var ses = new aws.SES();
const kms = new AWS.KMS();


let encrypted = {
  kmsKey: process.env.KMS_KEY,
  batcherPrivateKey: process.env.BATCHER_PRIVATE_KEY
}
let decrypted;





function processCreateAccount(event, context, callback) {
  const context = createContext('secp256k1')
  const batchSigner = CryptoFactory(context).new_signer(decrypted.batcherPrivateKey)
  let accounts = new Accounts(context, batchSigner, ses, kms, kmsKey)
  accounts.createAccount(event.request.userAttributes, callback)
}

module.exports.createAccount = async (event, context, callback) => {
  if (decrypted) {
    processCreateAccount(event, context, callback);
  } else {
    // Decrypt code should run once and variables stored outside of the function
    // handler so that these are decrypted once per container

    const decryptPromises = [
        kms.decrypt( { CiphertextBlob: new Buffer(encrypted.kmsKey, 'base64') } ).promise(),
        kms.decrypt( { CiphertextBlob: new Buffer(encrypted.batcherPrivateKey, 'base64') } ).promise()
    ];

    Promise.all( decryptPromises ).then( data => {
        decrypted.kmsKey = data[0].Plaintext.toString('ascii');
        decrypted.batcherPrivateKey = data[1].Plaintext.toString('ascii');

        processCreateAccount(event, context, callback);
    }).catch( err => {
        console.log('Decrypt error:', err);
        return callback(err);
    });
}
};

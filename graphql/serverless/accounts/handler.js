'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const {createContext, CryptoFactory} = require('sawtooth-sdk/signing')

const db = require('db').connect();
const mailer = require('mailer');
const Accounts = require('accounts');

const batcherPrivKey = process.env.BATCHER_PRIVATE_KEY
const context = createContext('secp256k1')
const batchSigner = CryptoFactory(context).new_signer(privateKey)

let accounts = new Accounts(db, mailer, context, batchSigner)


module.exports.createAccount = async (event, context, callback) => {
  accounts.save(event.email, callback);
};

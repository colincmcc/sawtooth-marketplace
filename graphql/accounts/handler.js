'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const db = require('db').connect();
const mailer = require('mailer');
const Accounts = require('accounts');


let accounts = new Accounts(db, mailer)



module.exports.createAccount = async (event, context, callback) => {
  accounts.save(event.email, callback);
};

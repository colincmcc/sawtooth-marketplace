const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { promisify } = require('./utils')

const getAccount = publicKey => promisify(callback => {
  dynamoDb.get({
    TableName: process.env.ACCOUNT_TABLE,
    Key: { firstName },
  }, callback))
  .then(result => {
    if(!result.Item) {
      return firstName
    }
    return result.Item.nickname
  })
  .then(name => `Hello, ${name}.`)

module.exports = {
  getAccount,
  createAccount
}
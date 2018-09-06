const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const payload_pb = require('./protos/payload_pb')

class HamletPayload {
  constructor (payload) {
    var currentTransaction =  payload_pb.TransactionPayload().deserializeBinary(payload)
  }


  function createAccount() {
    return currentTransaction.CreateAccount
  }

  function isCreateAccount() {
    const createAccountObject = payload.TransactionPayload.CREATE_ACCOUNT

    return currentTransaction.payloadType == createAccountObject
  }


}

module.exports = HamletPayload
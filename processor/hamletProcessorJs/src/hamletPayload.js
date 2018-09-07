const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const payload_pb = require('./protos/payload_pb')

class HamletPayload {

  constructor (payload) {
    var currentTransaction =  payload_pb.TransactionPayload().deserializeBinary(payload)
    console.log(payload)
    console.log(currentTransaction)
  }



  createAccount () {
    return currentTransaction.CreateAccount
  }

  isCreateAccount () {
    const createAccountObject = payload.TransactionPayload.CREATE_ACCOUNT
    console.log(createAccountObject)
    return currentTransaction.payloadType == createAccountObject
  }


}

module.exports = HamletPayload
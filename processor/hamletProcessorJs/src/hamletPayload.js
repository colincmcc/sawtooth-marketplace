const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const payload_pb = require('./protos/payload_pb')

class HamletPayload {

  constructor (payload) {

    this.transaction = payload_pb.TransactionPayload
    this.currentTransaction =  this.transaction.deserializeBinary(payload)
    console.log(this.currentTransaction)
  }

  fromBytes(payload) {
    const deserializedPayload = payload_pb.TransactionPayload.deserializeBinary(payload)
    return deserializedPayload
  }


  // Returns protobuf Create Account type to the
  // handleAccountCreation function
  createAccount () {
    return this.currentTransaction.getCreateAccount()
  }

  isCreateAccount (payload) {
    const createAccountType = payload_pb.TransactionPayload.PayloadType.CREATE_ACCOUNT
    return this.currentTransaction.getPayloadType() == createAccountType
  }


}

module.exports = HamletPayload
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const payload_pb = require('./protos/payload_pb')

class HamletPayload {

  constructor (payload) {

    this.transaction = payload_pb.TransactionPayload
    this.currentTransaction =  this.transaction.deserializeBinary(payload)

  }

  fromBytes(payload) {
    const deserializedPayload = payload_pb.TransactionPayload.deserializeBinary(payload)
    return deserializedPayload
  }



  createAccount () {
    return this.currentTransaction.CreateAccount()
  }

  isCreateAccount (payload) {
    const createAccountType = payload_pb.TransactionPayload.PayloadType.CREATE_ACCOUNT

    return this.currentTransaction.getPayloadType() == createAccountType
  }


}

module.exports = HamletPayload
const addresser = require('./addresser')
const payload_pb = require('./protos/payload_pb')

function createAccountTransaction(txnKey, batchKey, label, description){
  const address = addresser.makeAccountAddress(txnKey.getPublicKey)
  const inputs = [address]
  const outputs = [address]

const account = payload_pb.CreateAccount()
account.setLabel(label)
account.setDescription(description)

const payload = payload_pb.TransactionPayload().setCreateAccount(account)

return makeHeaderAndBatch(
   payload,
   inputs,
   outputs,
   txnKey,
   batchKey
   )
}

function makeHeaderAndBatch(   payload, inputs, outputs, txnKey, batchKey){
  const header = makeHeader(
    inputs,
    outputs,
    payload.serializeBinary().toHex()
  )
}
def make_header_and_batch(payload, inputs, outputs, txn_key, batch_key):

    header = make_header(
        inputs=inputs,
        outputs=outputs,
        payload_sha512=hashlib.sha512(
            payload.SerializeToString()).hexdigest(),
        signer_pubkey=txn_key.get_public_key().as_hex(),
        batcher_pubkey=batch_key.get_public_key().as_hex())

    return wrap_payload_in_txn_batch(
        txn_key=txn_key,
        payload=payload.SerializeToString(),
        header=header.SerializeToString(),
        batch_key=batch_key)

module.exports = {
  createAccountTransaction
}
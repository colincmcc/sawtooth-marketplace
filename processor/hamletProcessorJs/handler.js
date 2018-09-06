const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')

const asset = require('./asset/asset')
const account = require ('./account/account')
const HamletPayload = require('./hamlet_payload')

export class HamletHandler  extends TransactionHandler {
  constructor () {
    super(HAMLET_FAMILY, ['1.0'], [HAMLET_NAMESPACE])
  }


  apply (transactionProcessRequest, context) {

    let payload = HamletPayload.fromBytes(transactionProcessRequest.payload)
    let hamletState = new hamletState(context)
    let header = transactionProcessRequest.header

    if (payload.action === 'createAccount') {
      return account.handleAccountCreation(payload.createAccount, transaction.header, hamletState)
    } else if (payload.action === 'createAsset') {
      return asset.handleAssetCreation(payload.createAsset, transaction.header, hamletState)
    } else {
      throw new InvalidTransaction(
          `Action must be create, delete, or take not ${payload.action}`
      )
    }
  }
}

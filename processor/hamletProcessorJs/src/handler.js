const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')

const addresser = require('./hamletAddresser/addresser')
const handleAsset = require('./asset/handleAsset')
const handleAccount = require ('./account/handleAccount')
const {HamletPayload} = require('./hamletPayload')
const {HamletState} = require('./hamletState')

class HamletHandler  extends TransactionHandler {
  constructor () {
    super(addresser.HAMLET_FAMILY, ['1.0'], [addresser.NS_HASH])
  }


  apply (transactionProcessRequest, context) {

    let hamletPayload = new HamletPayload(transactionProcessRequest.payload)

    let hamletState = new HamletState(context)

    let header = transactionProcessRequest.header
    console.log('handler')
    console.log(hamletPayload)
    console.log(hamletState)
    console.log(header)
    console.log(isCreateAccount(hamletPayload))

    if (isCreateAccount(hamletPayload)) {
      return handleAccount.handleAccountCreation(payload.createAccount, transaction.header, hamletState)
   /* } else if (payload.action === 'createAsset') {
      return asset.handleAssetCreation(payload.createAsset, transaction.header, hamletState) */
    } else {
      throw new InvalidTransaction(
          `${payload.action} is not recognized as an action.`
      )
    }
  }
}

module.exports = HamletHandler

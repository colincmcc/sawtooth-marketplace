/*
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')

// createAsset (CreateAsset): The transaction.
// header (TransactionHeader): The header of the Transaction.
// state (MarketplaceState): The wrapper around the context.

function handleAssetCreation (createAsset, header, state) {
  const currentAccount = state.getAccount(header.signer_public_key)
  const currentAsset = state.getAsset(createAsset.name)
  if(!currentAccount) {
    throw new InvalidTransaction(
      `This signing key has no account!  We were unable to create the asset.`
    )
  } else if (currentAsset){
    throw new InvalidTransaction(
      `This asset already exists, please choose a different name`
    )
  } else {
    const newAsset = {
      name=createAsset.name,
      description=createAsset.description,
      owners=[header.signer_public_key],
      rules=createAsset.rules
    }
    state.setAsset(newAsset)
  }
}

module.exports = handleAssetCreation
*/
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const { HamletState } = require('../hamletState')


// createAccount (CreateAccount): The transaction.
// header (TransactionHeader): The header of the Transaction.
// state (MarketplaceState): The wrapper around the Context.

function handleAccountCreation(createAccount, header, state){
  console.log(createAccount, header, state)
  const currentAccount = state.getAccount(header.signer_public_key)

  if(currentAccount){
    throw new InvalidTransaction(
      `Account with key ${header.signer_public_key} already exists!`
    )
  } else {
    const newAccount = {
      public_key: header.signer_public_key,
      label: create_account.label,
      description: create_account.description,
      holdings: []
    }
    HamletState.setAccount(newAccount)
  }

}

module.exports = handleAccountCreation

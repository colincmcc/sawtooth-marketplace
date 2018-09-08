const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const { HamletState } = require('../hamletState')


// createAccount (CreateAccount): The transaction.
// header (TransactionHeader): The header of the Transaction.
// state (MarketplaceState): The wrapper around the Context.

const handleAccountCreation = (createAccount, header, state) => {
  console.log(createAccount, header, state)
  const currentAccount = state.getAccount(header.signerPublicKey)

  if(currentAccount){
    throw new InvalidTransaction(
      `Account with key ${header.signerPublicKey} already exists!`
    )
  } else {
    const newAccount = {
      public_key: header.signerPublicKey,
      label: createAccount.label,
      description: createAccount.description,
      holdings: []
    }
    HamletState.setAccount(newAccount)
  }

}

module.exports ={ handleAccountCreation}

const account_pb = require('./protos/account_pb')
const addresser = require('./hamletAddresser/addresser')

class HamletState {
  constructor (context) {
    this.context = context
    this.addressCache = new Map([])
    this.stateEntries = []
    this.timeout = 500 // timeout in milliseconds
  }


  getAccount(publicKey){
    let address = addresser.makeAccountAddress(publicKey)


    this.stateEntries.push(this.context.getState(
      [address],
      this.timeout
    ))

    let container = this._getAccountContainer(this.stateEntries, address)
    console.log(container)
    let account = this._getAccountFromContainer(
      container,
      publicKey
    )
    return account
  }

  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)

    let container = this._getAccountContainer(this.stateEntries, address)

    console.log(Promise.resolve(container))
    let account = this._getAccountFromContainer(
      container,
      publicKey
    )

    if (!account) {
      account = {}
      account.publicKey = publicKey
      account.label = label
      account.description = description

      holdings.forEach(holding => {
        account.holdings.push(holding)
      })
      container.entries.push(account)
    }

    let stateEntries = {
      [address]: container.serializeBinary()
    }

    return this.context.setState(
      stateEntries,
      this.timeout
    )

  }


  _getAccountContainer(stateEntries, address) {
    let entry = this._findInState(stateEntries, address)
    let container
    console.log(entry)

    if(entry){
      container = account_pb.AccountContainer.deserializeBinary(entry.data)
    } else {
      container = new account_pb.AccountContainer()
    }
    var currentContext = this.context.getState([address], this.timeout)

    console.log(currentContext)
    return container
  }

  _getAccountFromContainer(container, identifier) {

      container.getEntriesList().forEach(account => {
        if(account.publicKey == identifier){
          return account
        } else {
          console.log(identifier + " was not found in container.")
          return null
        }
      })
  }

  // locate specific address in state
  _findInState(stateEntries, address) {
    stateEntries.forEach(entry => {
      console.log(entry)
      if(entry.address == address){
        console.log(address)
        return entry
      }
    })
  }

}


module.exports = HamletState

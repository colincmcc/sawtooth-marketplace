const account = require('./protos/account_pb')
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

    console.log("address getAccount", address )

    this.stateEntries.push(this.context.getState(
      addresses=[address],
      timeout = this.timeout
    ))

    let container = this._getAccountContainer(this.stateEntries, address)
    let account = this._getAccountFromContainer(
      container,
      publicKey
    )
    return account
  }

  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)

    var container = this._getAccountContainer(this.stateEntries, address)


    var account = this._getAccountFromContainer(
      container,
      publicKey
    )
    console.log("setAccount acount", account)

    if (!account) {
      account.publicKey = publicKey
      account.label = label
      account.description = description

      holdings.forEach(holding => {
        account.holdings.push(holding)
      })
      container.entries.push(account)
    }

    let entries = {
      [address]: container.serializeBinary()
    }

    return this.context.setState(
      entries,
      this.timeout
    )

  }

  _getAccountContainer(stateEntries, address) {
    let entry = this._findInState(stateEntries, address)
    let container = account.AccountContainer()
    container.deserializeBinary(entry.data)

    console.log(container)

    return container
  }

  // locate specific address in state
  _findInState(stateEntries, address) {
    stateEntries.forEach(entry => {
      if(entry.address == address){
        console.log(address)
        return entry
      }
    })
  }

}


module.exports = {
  HAMLET_FAMILY,
  HAMLET_NAMESPACE,
  HamletState
}

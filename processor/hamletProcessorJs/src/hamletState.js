const account_pb = require('./protos/account_pb')
const asset_pb = require('./protos/asset_pb')
const addresser = require('./hamletAddresser/addresser')

class HamletState {
  constructor (context) {
    this.context = context
    this.stateEntries = []
    this.timeout = 500 // timeout in milliseconds
  }

// ASSET FUNCTIONS
  getAsset(name){
    let address = addresser.makeAccountAddress(publicKey)
   this.context.getState(
      [address],
      this.timeout
    ).then(addressValues => {
      this.stateEntries.push(addressValues)
    })

    let container = this._getAccountContainer(this.stateEntries, address)
    let account = this._getAccountFromContainer(
      container,
      publicKey
    )
    return account
  }

  setAsset(address, name){

  }

  _getAssetContainer(stateEntries, address){
    let entry = this._findInState(stateEntries, address)
    let container

    if(entry){
      container = asset_pb.AssetContainer.deserializeBinary(entry.data)
    } else {
      container = new  asset_pb.AssetContainer()
    }

    return container
  }

  // ACCOUNT FUNCTIONS
  getAccount(publicKey){
    let address = addresser.makeAccountAddress(publicKey)
   this.context.getState(
      [address],
      this.timeout
    ).then(addressValues => {
      this.stateEntries.push(addressValues)
    })

    let container = this._getAccountContainer(this.stateEntries, address)
    let account = this._getEntryFromContainer(
      container,
      publicKey
    )
    return account
  }

  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)

    let container = this._getAccountContainer(this.stateEntries, address)

    let account = this._getEntryFromContainer(
      container,
      publicKey
    )

    if (!account) {
      account = container.addEntries()
      account.publicKey = publicKey
      account.label = label
      account.description = description
      console.log(account)
      holdings.forEach(holding => {
        account.holdings.push(holding)
      })
      container.addEntries(account)
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

    if(entry){
      container = account_pb.AccountContainer.deserializeBinary(entry.data)
    } else {
      container = new account_pb.AccountContainer()
    }

    return container
  }

  // HOLDING FUNCTIONS


  // OFFER FUNCTIONS

  // HELPER FUNCTIONS

  _getContainer(containerType) {}
  _getEntryFromContainer(container, identifier) {
      container.getEntriesList().forEach(entry => {
        if(entry.publicKey == identifier){
          return entry
        } else {
          console.log(identifier + " was not found in container.")
          return null
        }
      })
  }

  // locate specific address in state
  _findInState(stateEntries, address) {
    stateEntries.forEach(entry => {
      if(entry.address == address){
        return entry
      }
    })
  }

}


module.exports = HamletState

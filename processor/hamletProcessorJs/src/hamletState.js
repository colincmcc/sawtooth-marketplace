const account_pb = require('./protos/account_pb')
const asset_pb = require('./protos/asset_pb')
const addresser = require('./hamletAddresser/addresser')

class HamletState {
  constructor (context) {
    this.context = context
    this.stateEntries = []
    this.addressCache = new Map([])
    this.timeout = 500 // timeout in milliseconds
  }

// ASSET FUNCTIONS
  getAsset(name){
    let address = addresser.makeAccountAddress(publicKey)
   this.context.getState(
      [address],
      this.timeout
    ).catch(e => console.log(e)).then(addressValues => {
      console.log(addressValues)
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

    let newContainer = new account_pb.AccountContainer()

    let container = this._loadEntries(address, newContainer)

    let account = this._getEntryFromContainer(
      container,
      publicKey
    )
    return account
  }


  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)
    console.log(address)

    let newContainer = new account_pb.AccountContainer()


    let container = this._loadEntries(address, newContainer)
    console.log(container)

    let account = this._getEntryFromContainer(
      container,
      publicKey,
      "publicKey"
    )

    if (!account) {
      account = container.addEntries()
      account.setPublicKey(publicKey)
      account.setLabel(label)
      account.setDescription(description)
      account.setHoldingsList(holdings)
    }
    console.log(container.getEntriesList())

    let data = container.serializeBinary()

    this.addressCache.set(address, data)

    let entriesToSubmit = {
      [address]: data
    }

    return this.context.setState(
      entriesToSubmit,
      this.timeout
    ).catch(e => console.log(e))

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


  _getEntryFromContainer(container, identifier, identifierType) {
      container.getEntriesList().forEach(entry => {
        if(entry[identifierType] == identifier){
          return entry
        } else {
          console.log(identifier + " was not found in container.")
          return null
        }
      })
  }

  // This will search the cache for the address supplied
  // if the address is present in the cache it will return a new Map or the deserialized container.
  // If the address is absent it will do the same search in the context
  _loadEntries(address, newContainer) {

    if (this.addressCache.has(address)){
      if(this.addressCache.get(address) === null) {
        return newContainer
      } else {
        return this.addressCache.get(address).then(address => address.deserializeBinary())
      }
    } else {
      return this.context.getState([address], this.timeout)
        .then(addressValues => {

          if(!addressValues[address].toString()) {
            this.addressCache.set(address, null)
            return newContainer
          } else {
            let data = addressValues[address].toString()
            this.addressCache.set(address, data)
            return data.deserializeBinary()
          }
        })
    }

  }

  // locate specific address in state
  _findInState(stateEntries, address) {

    stateEntries.forEach(entry => {
      console.log("find in state entry",entry)
      if(entry[address]){
        return entry
      }
    })
  }

}


module.exports = HamletState

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
    console.log(address)

   this.context.getState(
      [address],
      this.timeout
    ).catch(e => console.log(e)).then(addressValues => {
      this.stateEntries.push(addressValues)
    })
    console.log('stateEntries getAccount', this.stateEntries)

    let container = this._getAccountContainer(this.stateEntries, address)
    let account = this._getEntryFromContainer(
      container,
      publicKey
    )
    return account
  }


  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)
    console.log(address)
    let container = this._getAccountContainer(this.stateEntries, address)

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
      console.log("account after", account)
    }
    console.log("container after", container)
    console.log('container entries', container.getEntriesList())
    let stateEntries = {
      [address]: container.serializeBinary()
    }

    console.log("state Entry", account_pb.AccountContainer.deserializeBinary(stateEntries[address]))
    return this.context.setState(
      stateEntries,
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
        console.log("entry",entry[identifierType].deserializeBinary())
        if(entry[identifierType] == identifier){
          return entry
        } else {
          console.log(identifier + " was not found in container.")
          return null
        }
      })
  }

  _loadAddressState(publicKey, deserializeFunc) {
    let address = addresser.makeAccountAddress(publicKey)

    if (this.addressCache.has(address)){
      if(this.addressCache.get(address) === null) {
        return Promise.resolve(new Map([]))
      } else {
        return Promise.resolve(deserializeFunc(this.addressCache.get(address)))
      }
    } else {
      return this.context.getState([address], this.timeout)
        .then(addressValues => {
          if(!addressValues[address].toString()) {
            this.this.addressCache.set(address, null)
            return new Map([])
          } else {
            let data = addressValues[address].toString()
            this.addressCache.set(address, data)
            console.log("des data", deserializeFunc(data) )
            return deserializeFunc(data)
          }
        })
    }

  }

  // locate specific address in state
  _findInState(stateEntries, address) {
    stateEntries.forEach(entry => {
      console.log(entry)
      if(entry[address]){
        return entry
      }
    })
  }

}


module.exports = HamletState


'use strict'

const account_pb = require('./protos/account_pb')
const asset_pb = require('./protos/asset_pb')
const rule_pb = require('./protos/rule_pb')

const addresser = require('./hamletAddresser/addresser')


const OFFER_RULES = [rule_pb.Rule.EXCHANGE_ONCE_PER_ACCOUNT,
  rule_pb.Rule.EXCHANGE_ONCE,
  rule_pb.Rule.EXCHANGE_LIMITED_TO_ACCOUNTS]

class HamletState {
  constructor (context) {
    this.context = context
    this.addressCache = new Map([])
    this.timeout = 2000 // timeout in milliseconds
  }

// ASSET FUNCTIONS
getAsset(name){
  let address = addresser.makeAssetAddress(name)
  this.context.getState(
    [address],
    this.timeout
  ).then(addressValues => {
    console.log("get asset ad val", addressValues)
    this.addressCache.set(address, addressValues)

    let container = this._getAssetContainer(this.addressCache, address)

    let asset = this._getEntryFromContainer(
      container,
      name
    )
    return asset
  })
}


setAsset(name, description, owners, rules) {
  let address = addresser.makeAssetAddress(name)
  console.log(address)

  let container = this._getAssetContainer(this.addressCache, address)

  console.log("get asset con", container)
  let asset = this._getEntryFromContainer(
    container,
    name,
    "name"
  ) || container.addEntries()
    console.log("asset", asset)

    asset.setName(name)
    asset.setOwnersList(owners)
    asset.setDescription(description)
    asset.setRulesList(rules)

  console.log("entrieslist setasset", container.getEntriesList())

  let data = container.serializeBinary()

  this.addressCache.set(address, data)


  let entriesToSubmit = {
    [address]: data
  }
  console.log("entries submitted", entriesToSubmit)

  return this.context.setState(
    entriesToSubmit,
    this.timeout
  ).then(res => Promise.resolve(res))

}

_getAssetContainer(addressCache, address) {

  let entry = addressCache.get(address)
  console.log('entry', entry)

  let container

  if(entry){
    container = asset_pb.AssetContainer.deserializeBinary(entry.data)
  } else {
    container = new asset_pb.AssetContainer()
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
      console.log("get account ad val", addressValues)
      this.addressCache.set(address, addressValues)

      let container = this._getAccountContainer(this.addressCache, address)

      let account = this._getEntryFromContainer(
        container,
        publicKey
      )
      return account
    })

  }


  setAccount(publicKey, label, description, holdings) {
    let address = addresser.makeAccountAddress(publicKey)

    let container = this._getAccountContainer(this.addressCache, address)

    console.log("get account con", container)
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
    console.log("entrieslist setaccount", container.getEntriesList())

    let data = container.serializeBinary()

    this.addressCache.set(address, data)


    let entriesToSubmit = {
      [address]: data
    }
    console.log("entries submitted", entriesToSubmit)

    return this.context.setState(
      entriesToSubmit,
      this.timeout
    ).then(res => Promise.resolve(res))

  }

  _getAccountContainer(addressCache, address) {

    let entry = addressCache.get(address)
    console.log('entry', entry)

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
      console.log("get entry con", container)
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
  _loadEntries(address, emptyContainer) {

    if (this.addressCache.has(address)){

      // address is in cache
      if(this.addressCache.get(address) === null) {
        console.log("1 new Container")
        return new emptyContainer
      } else {
        console.log("2 addressCache", this.addressCache.get(address).then(address => address.deserializeBinary()))
        return this.addressCache.get(address).then(address => address.deserializeBinary())
      }
    } else {
      // check state for address
      return this.context.getState([address], this.timeout)
        .then(addressValues => {
          if(!addressValues[address].toString()) {
            // address is not in state
            console.log("3 new Container")
            this.addressCache.set(address, null)
            return account_pb.AccountContainer()
          } else {
            let data = addressValues[address].toString()
            console.log("4 data context",  data.deserializeBinary())
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

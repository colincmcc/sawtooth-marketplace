
const crypto = require('crypto')

// Make a unique hamlet address
const NS_HASH = (x) =>
crypto.createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 64)

const HAMLET_FAMILY = 'marketplace'
const HAMLET_NAMESPACE = hash(HAMLET_FAMILY).substring(0,6)

const _makeHamletAddress = (x) => HAMLET_NAMESPACE + NS_HASH(x)


const  accountSpace = Object.freeze({
  START: 125,
  STOP: 200
})

const addressSpace = Object.freeze({
  ASSET: 0,
  HOLDING: 1,
  ACCOUNT: 2,
  OFFER: 3,
  OFFER_HISTORY: 4,
  OTHER: 100
})

function hash  (identifier) {
  return crypto.createHash('sha512').update(identifier).digest('hex').toLowerCase()
}

const compress = (address, start, stop) => {
  return "%.2X".toLowerCase() % (parseInt(address, 16) % (stop - start))
}

// accountId is user's public key
function makeAccountAddress (accountId) {
  const fullHash = hash(accountId)

  return HAMLET_NAMESPACE + compress(
    fullHash,
    accountSpace.START,
    accountSpace.STOP
  ) + fullHash.slice(0, 62)
}

const spaceContains = (num, space) => {
  return space.START <= num < space.STOP
}

function makeAddress(address) {
  if (address.slice(0, address.length()) != _nsHash){
    return addressSpace.OTHER
  }

  let infix = parseInt(address.slice(6, 8), 16)
    console.log(infix)

  let result
  console.log(result)
  if(spaceContains(infix, accountSpace)){
    console.log("accountSpace")
    result = addressSpace.ACCOUNT
  }

  return result
}

module.exports = {
  HAMLET_FAMILY,
  HAMLET_NAMESPACE,
  makeAccountAddress,
  makeAddress,
}
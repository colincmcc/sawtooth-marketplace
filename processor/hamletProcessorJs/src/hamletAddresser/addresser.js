
const crypto = require('crypto')
var bigInt = require("big-integer")

// Make a unique hamlet address
const NS_HASH = (x) =>
crypto.createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 64)

const HAMLET_FAMILY = 'marketplace'
const HAMLET_NAMESPACE = hash(HAMLET_FAMILY).substring(0,6)

const _makeHamletAddress = (x) => HAMLET_NAMESPACE + NS_HASH(x)


const  accountSpace = {
  START: 125,
  STOP: 200
}

const addressSpace ={
  ASSET: 0,
  HOLDING: 1,
  ACCOUNT: 2,
  OFFER: 3,
  OFFER_HISTORY: 4,
  OTHER: 100
}

function hash  (identifier) {
  return crypto.createHash('sha512').update(encodeURIComponent(identifier)).digest('hex')
}


// Returns a two digit hex based on the given parameters
// Javascript ints are actually floats
// for this to work with python scripts we need to use an outside package to deal with large integers
const _compress = (address, start, stop) => {
  const startStopMod = stop - start
  const bi = bigInt(address, 16)
  const biMod = bi.mod(startStopMod) + start

  return biMod.toString(16)
}

// accountId is user's public key
function makeAccountAddress (accountId) {
  const fullHash = hash(accountId)

  return HAMLET_NAMESPACE + _compress(
    fullHash,
    accountSpace.START,
    accountSpace.STOP
  ) + fullHash.substring(0, 62)
}

const spaceContains = (num, space) => {
  return space.START <= num < space.STOP
}

function addressIs(address) {
  if (address.slice(0, address.length()) !=  HAMLET_NAMESPACE){
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
  addressIs,
}
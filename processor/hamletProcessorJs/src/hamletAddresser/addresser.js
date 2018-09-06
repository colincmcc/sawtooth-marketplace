
const crypto = require('crypto')

// Make a unique hamlet address
const NS_HASH= (x) =>
crypto.createHash('sha512').update(x).digest('hex').toLowerCase().substring(0, 64)

const HAMLET_FAMILY = 'hamlet'
const HAMLET_NAMESPACE = _hash(HAMLET_FAMILY).substring(0,6)

const _makeHamletAddress = (x) => HAMLET_NAMESPACE + _nsHash(x)


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

_hash(identifier) {
  return crypto.createHash('sha512').update(identifier).digest('hex').toLowerCase()
}

_compress(address, start, stop) {
  return "%.2X".toLowerCase() % (parseInt(address, 16) % (stop - start))
}

// accountId is user's public key
makeAccountAddress(accountId) {
  fullHash = _hash(accountId)

  return NS_HASH + _compress(
    full_hash,
    accountSpace.START,
    accountSpace.STOP
  ) + full_hash.slice(0, 62)
}

_spaceContains(num, space){
  return space.START <= num < space.STOP
}

makeAddress(address) {
  if (address.slice(0, address.length()) != _nsHash){
    return addressSpace.OTHER
  }

  let infix = parseInt(address.slice(6, 8), 16)
    console.log(infix)
  let result

  if(_spaceContains(infix, accountSpace)){
    console.log("accountSpace")
    result = addressSpace.ACCOUNT
  }

  return result
}
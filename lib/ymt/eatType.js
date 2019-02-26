const EatType = require('./model/eatType')

async function addEatType(eatTypeData) {
  return await EatType.create(eatTypeData)
}

async function getEatTypeList() {
  return await EatType.find()
}

module.exports = {
  addEatType,
  getEatTypeList
}
const EatType = require('./model/eatType')

async function addEatType(eatTypeData) {
  return await EatType.create(eatTypeData)
}

async function getEatTypeList() {
  return await EatType.find()
}

async function deteleEatType(id) {
  return await EatType.remove({_id: id})
}

module.exports = {
  addEatType,
  getEatTypeList,
  deteleEatType
}
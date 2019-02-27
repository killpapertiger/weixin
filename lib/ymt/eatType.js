const EatType = require('./model/eatType')

async function addEatType(eatTypeData) {
  return await EatType.create(eatTypeData)
}

async function getEatTypeList(params) {
  return await EatType.find(params)
}

async function deteleEatType(id) {
  return await EatType.deleteOne({_id: id})
}

module.exports = {
  addEatType,
  getEatTypeList,
  deteleEatType
}
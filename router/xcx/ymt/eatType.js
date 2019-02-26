var {addEatType, getEatTypeList, deteleEatType} = require('../../../lib/ymt/eatType')

module.exports = {
  addEatType:async (ctx) => {
    let {imgUrl, typeName} = ctx.request.body
    await addEatType({imgUrl, typeName})
    ctx.body = {
      code: 200
    }
  },
  getEatTypeList: async (ctx) => {
    let result = await getEatTypeList()
    ctx.body = {
      code: 200,
      result
    }
  },
  deteleEatType: async (ctx) => {
    let id = ctx.query.id
    await deteleEatType(id)
    ctx.body = {
      code: 200
    }
  }
}
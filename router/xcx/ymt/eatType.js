var {addEatType, getEatTypeList, deteleEatType} = require('../../../lib/ymt/eatType')

module.exports = {
  addEatType:async (ctx) => {
    let {parentId, imgUrl, typeName} = ctx.request.body
    await addEatType({parentId, imgUrl, typeName})
    ctx.body = {
      code: 200
    }
  },
  getEatTypeList: async (ctx) => {
    let { parentId } = ctx.query
    let result = await getEatTypeList(parentId ? { parentId } : {})
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
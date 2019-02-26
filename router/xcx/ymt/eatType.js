var {addEatType, getEatTypeList} = require('../../../lib/ymt/eatType')

module.exports = {
  addEatType:async (ctx) => {
    let {imgUrl, typeName} = ctx.request.body
    await addEatType({imgUrl, typeName})
    ctx.body = {
      code: 20000
    }
  },
  getEatTypeList: async (ctx) => {
    let result = await getEatTypeList()
    ctx.body = {
      code: 20000,
      result
    }
  }
}
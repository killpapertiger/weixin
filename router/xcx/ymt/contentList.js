let { addContentList, getContentList, deteleContentList } = require('../../../lib/ymt/contentList')

module.exports = {
  addContentList:async (ctx) => {
    await addContentList({ ...ctx.request.body })
    ctx.body = {
      code: 200
    }
  },
  getContentList: async (ctx) => {
    let result = await getContentList()
    ctx.body = {
      code: 200,
      result
    }
  },
  deteleContentList: async (ctx) => {
    let { id } = ctx.request.query
    await deteleContentList(id)
    ctx.body = {
      code: 200
    }
  }
}
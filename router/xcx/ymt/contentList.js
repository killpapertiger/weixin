let { addContentList, getContentList, deteleContentList } = require('../../../lib/ymt/contentList')

module.exports = {
  addContentList:async (ctx) => {
    await addContentList({ ...ctx.request.body })
    ctx.body = {
      code: 200
    }
  },
  getContentList: async (ctx) => {
    let { parentId, id } = ctx.request.query
    let obj = parentId ? {parentId} : id ? {_id: id} : {}
    let result = await getContentList(obj)
    ctx.body = {
      code: 200,
      result: id ? result[0] : result
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
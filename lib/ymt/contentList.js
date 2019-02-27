const ContentList = require('./model/contentList')

async function addContentList(data) {
  return await ContentList.create(data)
}

async function getContentList(params) {
  return await ContentList.find(params)
}

async function deteleContentList(id) {
  return await ContentList.deleteOne({_id: id})
}

module.exports = {
  addContentList,
  getContentList,
  deteleContentList
}
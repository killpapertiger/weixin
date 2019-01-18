const Needs = require('./model/needs')


/**
 * 插入新的数据
 * @param user
 * @returns {Promise<*>}
 */
async function addNeed(data) {
  const {
    title,
    address,
    have,
    ned
  } = data
  return await Needs.create(data)
}

module.exports = {
  addNeed
}
const { addNeed } = require('../../lib/needs')

module.exports = {
  add: async (ctx, next) => {
    ctx.body = {
      code: 200,
      Result: null
    }
  }
}
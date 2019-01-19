const {encode} = require('../../common/genslogin')

module.exports = {
  ercode: async (ctx, next) => {
    ctx.body = {
      code: 200,
      data: await getErCode()
    }
  }
}

async function getErCode() {
  const code = encode(Math.random())
  await add(code)
  setTimeout(() => {
    removeData(code)
  }, 30000)
  return code
}
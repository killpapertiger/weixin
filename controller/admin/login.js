const {encode, decode} = require('../../common/genslogin')
const Code = require('../../lib/code')
const CodeModel = require('../../lib/model/code')
const process = require('process')
const { getById } = require('../../lib/users')

module.exports = {
  login: async (ctx) => {
    await ctx.render("./login", {title: "chunyu欢迎您"});
  },
  check: async (ctx, next) => {
    const startTime = Date.now()
    async function login() {
      const code = ctx.params.code
      const auth = await getSessionKeyByCode(code)
      if (auth) {
        let _auth = decode(auth)
        let {id, timespan} = _auth
        let userInfo = await getById(id)
        ctx.body = {
          code: 200,
          result: {
            auth,
            userInfo
          }
        }
      } else {
        if (Date.now() - startTime < 2000) {
          await new Promise(resolve => {
            process.nextTick(() => {
              resolve()
            })
          })
          await login()
        } else {
          ctx.body = {code: 201}
        }
      }
    }
    await login()
  },
  /**
   * 小程序中登录后台
   * @param ctx
   * @param next
   * @returns {Promise<void>}
   */
  ercodeGet: async (ctx, next) => {
    const code = ctx.params.code
    const auth = ctx.get('Auth')
    if (!auth || auth === '[object Undefined]' || toString.call(auth) !== '[object String]') {
      ctx.body = {
        code: 551,
        errMessage: '用户未登录'
      }
    } else {
      await setSessionKeyForCode(code, auth)
    }
    await next()
  },
  /**
   * 后台访问获取到二维码信息
   * @type {{ercode: function(*, *)}}
   */
  ercode: async (ctx, next) => {
    ctx.body = {
      code: 200,
      result: await getErCode()
    }
  }
}

async function getErCode() {
  const code = encode(Math.random())
  await Code.add(code)
  return code
}

async function setSessionKeyForCode(code, auth) {
  const {timespan} = decode(code)
  // 30s过期
  // if (Date.now() - timespan > 30*1000) {
  //   throw new Error('time out')
  // }
  await Code.updateCode(code, {auth})
}

async function getSessionKeyByCode(code) {
  const auth = await getSessionKey(code)
  if (auth) {
    await Code.removeData(code)
  }
  return auth
}

async function getSessionKey(code) {
  const data = await CodeModel.findOne({
    code: code
  })
  if (data) {
    return data.auth
  } else {
    return null
  }
}

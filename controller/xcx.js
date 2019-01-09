const { wxlogin } = require('../service/xcx')
const WXBizDataCrypt = require('../common/xcx/WXBizDataCrypt')
const Config = require('../config')
const { getById } = require('../lib/users')
const { decode } = require('../common/genslogin')

module.exports = {
  /**
   * 小程序登录
   * @param ctx
   * @param next
   * @returns {Promise<void>}
   */
  login: async (ctx, next) => {
    let body = ctx.request.body
    let jsonDataType = Object.prototype.toString.call(body.jsonData)
    let userInfo = null
    if (jsonDataType === '[object Object]') {
      userInfo = body.jsonData.userInfo
    } else if(jsonDataType === '[object String]'){
      userInfo = JSON.parse(body.jsonData).userInfo
    }
    let result = await wxlogin(userInfo, body.code)
    ctx.body = result
  },
  /**
   * 获取步数
   * @param ctx
   * @param next
   * @returns {Promise<void>}
   */
  weRunData: async (ctx, next) => {
    let auth = ctx.get('Auth')
    if (!auth || toString.call(auth) !== '[object String]') {
      ctx.body = {
        code: 401,
        message: '用户未登录'
      }
    } else {
      auth = decode(auth)
      let {id, timespan} = auth
      let body = ctx.request.body
      let {encryptedData, iv} = body
      let userData = await getById(id)
      console.log(Config.appid, userData)
        let pc = new WXBizDataCrypt(Config.appid, userData.session_key)
      let data = pc.decryptData(encryptedData, decodeURIComponent(iv))
      ctx.body = data
    }
  }
}
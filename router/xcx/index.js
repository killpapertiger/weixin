const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')

const request = require('request')
var iconv = require("iconv-lite")
var gbk = require('gbk')

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .get('/ymt/intitleJsonForWap',async (ctx, next) => {
    let query = ctx.query
    let data = await intitle(query.wordsCount, query.sex, query.xing)
  })

async function intitle(wordsCount, sex, xing) {
  return new Promise((res, rej) => {
    request(`https://my.pcbaby.com.cn/intf/forCMS/intitleJsonForWap.jsp?callback=fillName&wordsCount=1&sex=0&xing=${encodeURIComponent(xing)}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let obj = iconv.decode(body, 'utf8')
        console.log(obj)
        res(obj)
      } else {
        res(false)
      }
    })
  })
}

module.exports = xcx
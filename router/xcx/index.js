const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')

// const request = require('request')
// var iconv = require("iconv-lite")
// var gbk = require('gbk')

var charset = require('superagent-charset');
var superagent = charset(require('superagent'));

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .get('/ymt/intitleJsonForWap',async (ctx, next) => {
    let query = ctx.query
    let result = await intitle(query.wordsCount, query.sex, query.xing)
    ctx.body = {
      code: 200,
      result
    }
  })

async function intitle(wordsCount, sex, xing) {
  return new Promise((res, rej) => {
    superagent.post(`https://my.pcbaby.com.cn/intf/forCMS/intitleJsonForWap.jsp?wordsCount=1&sex=0&xing=${encodeURIComponent(xing)}`)
      .type('form')
      .set('Accept', 'application/json')
      .charset('gbk')
      .end(function (err, sres) {
        if (!err){
          res(JSON.parse(sres.text.replace('(', '').replace(')', '')))
        } else {
          res(false)
        }
      })
  })
}

module.exports = xcx
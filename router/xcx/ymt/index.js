var charset = require('superagent-charset')
var superagent = charset(require('superagent'))

module.exports = {
  intitleJsonForWap: async (ctx) => {
    let query = ctx.query
    let result = await intitle(query.wordsCount, query.sex, query.xing)
    ctx.body = {code: 200, result}
  }
}

async function intitle(wordsCount, sex, xing) {
  return new Promise((res, rej) => {
    superagent.post(`https://my.pcbaby.com.cn/intf/forCMS/intitleJsonForWap.jsp?wordsCount=${wordsCount}&sex=${sex}&xing=${encodeURIComponent(xing)}`)
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
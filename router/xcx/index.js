const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')
const ymt = require('./ymt')

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .get('/ymt/intitleJsonForWap',ymt.intitleJsonForWap )

module.exports = xcx
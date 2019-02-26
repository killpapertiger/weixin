const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')
const ymt = require('./ymt')
const eatType = require('./ymt/eatType')

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .get('/ymt/intitleJsonForWap',ymt.intitleJsonForWap)
  .post('/ymt/addEatType', eatType.addEatType)
  .get('/ymt/getEatTypeList', eatType.getEatTypeList)
  .get('/ymt/deteleEatType', eatType.deteleEatType)

module.exports = xcx
const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')
const ymt = require('./ymt')
const eatType = require('./ymt/eatType')
const contentList = require('./ymt/contentList')

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .get('/ymt/intitleJsonForWap',ymt.intitleJsonForWap)
  .post('/ymt/addEatType', eatType.addEatType)
  .get('/ymt/getEatTypeList', eatType.getEatTypeList)
  .get('/ymt/deteleEatType', eatType.deteleEatType)
  .post('/ymt/addContentList', contentList.addContentList)
  .get('/ymt/getContentList', contentList.getContentList)
  .get('/ymt/deteleContentList', contentList.deteleContentList)


module.exports = xcx
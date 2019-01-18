const Router = require('koa-router')
const xcx = new Router()
const xcxController = require('../../controller/xcx')
const xcxNeedController = require('../../controller/need')

xcx.post('/login', xcxController.login)
  .post('/weRunData', xcxController.weRunData)
  .post('/need/add', xcxNeedController.add)

module.exports = xcx
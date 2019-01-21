const Router = require('koa-router')
const admin = new Router()
const loginController = require('../../controller/admin/login')
const {responseOk} = require('../../common/apiresok')

admin.get('/login', loginController.login)
  .get('/login/ercode/:code', loginController.ercodeGet, responseOk)
  .get('/login/ercode', loginController.ercode)
  .get('/login/errcode/check/:code', loginController.check)

module.exports = admin
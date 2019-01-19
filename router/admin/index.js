const Router = require('koa-router')
const admin = new Router()
const loginController = require('../../controller/admin/login')

admin.post('/login/ercode', loginController.ercode)

module.exports = admin
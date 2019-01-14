const Router = require('koa-router')
const admin = new Router()
const adminController = require('../../controller/admin')

admin.get('/getcode', adminController.getcode)

module.exports = admin
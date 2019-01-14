const Router = require('koa-router')
const router = new Router()
const weixin = require('./weixin')
const xcx = require('./xcx')
const admin = require('./admin')

router.use('/weixin', weixin.routes(), weixin.allowedMethods())
router.use('/xcx', xcx.routes(), xcx.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

module.exports = router
const Router = require('koa-router')
const router = new Router()
const weixin = require('./weixin')
const xcx = require('./xcx')
const admin = require('./admin')
const multer = require('koa-multer')
const path = require('path')

var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/public/uploads/ymt')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".")  //以点分割成数组，数组的最后一项就是后缀名
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1])
  }
})
//加载配置
var upload = multer({ storage: storage })

router.use('/weixin', weixin.routes(), weixin.allowedMethods())
router.use('/xcx', xcx.routes(), xcx.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    code: 200,
    result: `http://wx.yinchunyu.com/uploads/ymt/${ctx.req.file.filename}`
  }
})

module.exports = router
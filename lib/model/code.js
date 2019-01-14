/**
 * 生成二维码code
 */
const { mongoose } = require('../conn')

const codeSchema = new mongoose.Schema({
  code: {
    type: String
  },
  sessionKey: String
})
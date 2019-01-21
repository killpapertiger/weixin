const { mongoose } = require('../conn')

const codeSchema = new mongoose.Schema({
  code: {
    type: String
  },
  auth: String
})

const Codes = mongoose.model('Codes', codeSchema)
module.exports = Codes
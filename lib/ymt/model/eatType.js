const { mongoose } = require('../../conn')

const eatType = new mongoose.Schema({
  imgUrl: {
    type: String
  },
  typeName: {
    type: String
  }
})

const EatType = mongoose.model('EatType', eatType)
module.exports = EatType
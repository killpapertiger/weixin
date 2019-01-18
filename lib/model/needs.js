const { mongoose } = require('../conn')

const needsSchema = new mongoose.Schema({
  title: {
    type: String
  },
  address: {
    type: String
  },
  have: {
    type: String
  },
  ned: {
    type: String
  }
})

const Needs = mongoose.model('Needs', needsSchema)
module.exports = Needs
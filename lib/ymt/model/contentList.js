const { mongoose } = require('../../conn')

const contentList = new mongoose.Schema({
  title: {
    type: String
  },
  parentId: {
    type: String
  },
  minImg: {
    type: String
  },
  maxImg: {
    type: String
  },
  pregnant: {
    type: String
  },
  pregnantText: {
    type: String
  },
  lyingIn: {
    type: String
  },
  lyingInText: {
    type: String
  },
  lactation: {
    type: String
  },
  lactationText: {
    type: String
  },
  baby: {
    type: String
  },
  babyText: {
    type: String
  },
  timestamp: {
    type: String,
    default: new Date()
  }
})

const ContentList = mongoose.model('ContentList', contentList)
module.exports = ContentList
const Codes = require('./model/code')

async function add(code) {
  return Codes.create({
    code: code
  })
}

async function removeData(code){
  return await Codes.deleteMany({
    code: code
  })
}

async function updateCode(code, params) {
  return await Codes.updateOne({
    code: code
  }, params)
}

module.exports = {
  add,
  removeData,
  updateCode
}
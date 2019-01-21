const crypto = require('crypto')
const algorithm = 'aes-128-cbc'
const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');

function encode (id) {
  const encoder = crypto.createCipheriv(algorithm, key, iv);
  const str = [id, Date.now(), 'weixin2019'].join('|')
  let encrypted = encoder.update(str, 'utf8', 'hex')
  encrypted += encoder.final('hex')
  return encrypted
}

function decode(str) {
  const decoder = crypto.createDecipheriv(algorithm, key, iv)
  let decoded = decoder.update(str, 'hex', 'utf8')
  decoded += decoder.final('utf8')
  const arr = decoded.split('|')
  return {
    id: arr[0],
    timespan: parseInt(arr[1])
  }
}

module.exports = {
  encode,
  decode
}
async function responseOk(ctx, next) {
  ctx.body = {
    code: 200
  }
  await next()
}

module.exports = {
  responseOk
}
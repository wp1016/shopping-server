const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const session = require('koa-session-minimal')


const routes = require('./routes/index')
let expires = new Date(new Date().getTime() + 20 * 60 * 1000)
let cookie = {
  maxAge: 30 * 60 * 1000, // cookie有效时长
  expires: expires,
  patth: "/api",
  httpOnly: false, // 是否只用于http请求中获取
  overwrite: false // 是否允许重写
}

app.use(session({ //验证码
  key: 'captcha',
  cookie:cookie,
  expires: expires,
  path: "/api"
}))


app.use(cors({
  credentials:true
}))

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routes.routes(), routes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
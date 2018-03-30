const router = require('koa-router')()
const loginRouter = require('./login')
const homepageRouter = require('./homepage')
const organizationRouter = require('./organization')
const orderRouter = require('./order')
const videoRouter = require('./video')
const webcastRouter = require('./webcast')
const resourceRouter = require('./resource')

router.prefix('/api/v1')
//登录
router.use('/account', loginRouter.routes(), loginRouter.allowedMethods())
// 首页接口列表
router.use('/home', homepageRouter.routes(), homepageRouter.allowedMethods())
//机构详情接口列表
router.use('/organization', organizationRouter.routes(), organizationRouter.allowedMethods())
//订单接口列表
router.use('/order', orderRouter.routes(), orderRouter.allowedMethods())
//点播视频接口列表
router.use('/video', videoRouter.routes(), videoRouter.allowedMethods())
//直播接口列表
router.use('/webcast', webcastRouter.routes(), webcastRouter.allowedMethods())
//资源接口列表
router.use('/resource', resourceRouter.routes(), resourceRouter.allowedMethods())




module.exports = router
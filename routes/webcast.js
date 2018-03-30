const router = require('koa-router')()
const webcastController = require('../controller/webcastController')

/* 直播详情 */
router.get('/courseLiveDetail.node', webcastController.courseLiveController)
/* 回放详情 */
router.get('/livePeriodList.node', webcastController.livePeriodList);
/* 直播报名 */
router.post('/signUp.node', webcastController.signUp);
/* 查询是否报名 */
router.post('/checkStatus.node', webcastController.checkStatus);
/* 同步购买状态 */
router.post('/updataBuyStatus.node', webcastController.updataBuyStatus);

module.exports = router
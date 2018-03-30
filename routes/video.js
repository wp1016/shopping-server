const router = require('koa-router')();
const videoController = require('../controller/videoController')



/* 点播详情 */
router.get('/coursecenter.node', videoController.coursecenter);
/* 点播详情内章节相关资料 */
router.get('/information.node', videoController.information);
/* 点播视频地址 */
router.get('/getVideoUrl.node', videoController.getVideoSrc);
/* 是否购买（报名）状态 */ 
router.post('/checkStatus.node',videoController.checkStatus);
/* 写入报名状态 */
router.post('/updataSignUpStatus.node', videoController.updataSignUpStatus)

module.exports = router;
const router = require('koa-router')()
const accountController = require('../controller/loginController')

//登录
router.post('/login.node', accountController.login);
//找回密码
router.post('/findPassword.node', accountController.findPassword);
//获取图片验证码
router.get('/getVerifyCode.node', accountController.getVerifyCode);
//获取密保问题
router.post('/getVerifyAnswer.node', accountController.getVerifyAnswer);
//验证密保问题
router.post('/checkVerifyAnswer.node', accountController.checkVerifyAnswer);
//验证图片验证码
router.get('/checkVerifyCode.node', accountController.checkVerifyCode);
//通过用户名获取用户信息
router.get('/getUserInfo.node', accountController.getUserInfo);
//重置密码
router.post('/resetPassword.node', accountController.resetPassword);




module.exports = router
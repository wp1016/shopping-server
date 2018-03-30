const router = require('koa-router')();
const orderController = require('../controller/orderController')



/* 免费商品生成订单 */
router.post('/freeOrder.node', orderController.freeOrder);
/* 收费商品生成订单 */
router.post('/chargeOrder.node', orderController.chargeOrder);
/* 取消订单 */
router.post('/cancelOrder.node', orderController.cancelOrder);
/* 获取买家订单列表 */
router.get('/orderList.node', orderController.queryOrderList);
/* 生成支付宝订单 */
router.post('/createAlipayOrder.node', orderController.createAlipayOrder);
/* 查询支付宝支付状态 */
router.post('/checkPayStatus.node', orderController.checkPayStatus);
/* 删除订单 */
router.get('/delOrder.node', orderController.delOrder);
/* 订单详情 */
router.get('/orderDetail.node', orderController.orderDetail);

module.exports = router
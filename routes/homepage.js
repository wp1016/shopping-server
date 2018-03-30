const router = require('koa-router')()
const homePageController = require('../controller/homepageController')

/* 推荐资源 */
router.get('/recommendList.node', homePageController.recommendResources);
/* 首页banner资源 */
router.get('/getBannerUrl.node', homePageController.bannerUrl);
/* 推荐课程 */
router.get('/courseRecommend.node', homePageController.courseRecommend);
/* 最近直播 */
router.get('/recentWebcast.node', homePageController.getRecentWebcast);
/* 直播列表 */
router.get('/videoList.node', homePageController.queryVideoList);
/* 已购买的直播或者点播 */
router.get('/hasBuy.node', homePageController.hasBuy);
/* 商铺详情（直播点播资源列表） */
router.get('/orgDetail.node', homePageController.orgDetail);
/* 查询商品是否购买 */
router.post('/checkBuyStatus.node', homePageController.checkBuyStatus);
/* 查询我购买的资源 */
router.get('/myResource.node', homePageController.queryMyResource);
/* 查询学段 */
router.get('/queryPeriodList.node',homePageController.queryPeriodList);
/* 查询学科 */
router.get('/querySubjectList.node',homePageController.querySubjectList);
/* 更多供应商 */
router.get('/searchMerchant.node', homePageController.searchMerchant);
/* 推荐直播课程 */
//router.get('/webcastRecommend.node', homePageController.courseGoodsType2Recommend)


module.exports = router
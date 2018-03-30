/*
 * @Author: wangpan 
 * 资源接口列表
 * @Date: 2018-03-27 15:19:29 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 15:20:13
 */
const router = require('koa-router')();
const resourceController = require('../controller/resourceController');

/* 资源列表 */
router.get('/getResourceList.node', resourceController.getResourceList);
/* 资源详情 */
router.get('/getResourceDetail.node', resourceController.getResourceDetail);
/* 获取学科 */
router.get('/getSubjects.node', resourceController.getSubject);
/* 获取版本 */
router.get('/getEditions.node', resourceController.getEditions);
/* 获取教材 */
router.get('/getBooks.node', resourceController.getTextbooks);
/* 获取章节 */
router.get('/getPages.node', resourceController.getPage);


module.exports = router;
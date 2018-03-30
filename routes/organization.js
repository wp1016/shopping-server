const router = require('koa-router')()
const organizationController = require('../controller/organizationController');


/* 机构详情 */
router.get('/info.node', organizationController.getOrganizationInfo);

module.exports = router
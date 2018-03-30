/*
 * @Author: wangpan 
 * 机构接口控制器
 * @Date: 2018-03-27 13:55:55 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 13:57:37
 */


const superagent = require('superagent');
const organizationUrl = `http://scgateway.t.zjle.cn/shop-gateway/merchantDetailed`;

const getOrganizationInfo = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(organizationUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}



module.exports = {
    getOrganizationInfo
}
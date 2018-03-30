/*
 * @Author: wangpan 
 * 首页接口控制器
 * @Date: 2018-03-27 10:56:48 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 11:57:27
 */

const superagent = require('superagent');

const BASE_URL = `http://scgateway.t.zjle.cn`;
const recommendListUrl = `${BASE_URL}/shop-gateway/resource/recommendList`;
const bannerUrls = `${BASE_URL}/shop-gateway/getAllAdverMall`
const courseRecommendUrl = `${BASE_URL}/shop-gateway/courseRecommend`;
const recentWebcastUrl = `${BASE_URL}/shop-gateway/queryLatestLiveCourse`;
const videoListUrl = `${BASE_URL}/shop-gateway/queryCourseList`;
const hasBuyUrl = `${BASE_URL}/shop-gateway/queryMyCourseList`;
const myResourceUrl = `${BASE_URL}/shop-gateway/resource/queryMyResorceList`
const freeOrder = `${BASE_URL}/shop-gateway/addSubcribe`;
const orgDetailUrl = `${BASE_URL}/shop-gateway/merchantDetailed`;
const checkBuyStatusUrl = `${BASE_URL}/shop-gateway/queryAuth`;
const queryPeriodListUrl = `${BASE_URL}/shop-gateway/queryPeriodList`;
const querySubjectListUrl = `${BASE_URL}/shop-gateway/querySubjectListByPeriodId`;
const searchMerchantUrl = `${BASE_URL}/shop-gateway/searchMerchant`;

/**
 * 首页推荐资源列表
 * @param {any} ctx 
 * @param {any} next 
 */
const recommendResources = async (ctx, next) => {
    const payload = {
        page: {
            page: ctx.query.page,
            rows: ctx.query.rows,
        }
    }
    try {
        let data = await superagent.post(recommendListUrl);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

/**
 * 广告banner
 * @param {any} ctx 
 * @param {any} next 
 */
const bannerUrl = async (ctx, next) => {
    try {
        let data = await superagent.post(bannerUrls)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

/**
 * 推荐课程
 * @param {any} ctx 
 * @param {any} next 
 */
const courseRecommend = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(courseRecommendUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 最近直播
 * @param {any} ctx 
 * @param {any} next 
 */
const getRecentWebcast = async (ctx, next) => {
    try {
        let data = await superagent.get(recentWebcastUrl)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 直播点播列表
 * @param {any} ctx 
 * @param {any} next 
 */
const queryVideoList = async (ctx, next) => {
    let payload = ctx.query;
    payload.pagination = {
        page: payload.page || 1,
        rows: payload.rows || 10
    }
    try {
        let data = await superagent.post(videoListUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询已购课程
 * @param {any} ctx 
 * @param {any} next 
 */
const hasBuy = async (ctx, next) => {
    let payload = ctx.query;
    payload = {
        goodsType: payload.goodsType,
        userId: payload.userId,
        pagination: {
            page: payload.page || 1,
            rows: payload.rows || 10
        }
    }
    try {
        let data = await superagent.post(hasBuyUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 商铺详情
 * @param {any} ctx 
 * @param {any} next 
 */
const orgDetail = async (ctx, next) => {
    let payload = ctx.query;
    payload.pagination = {
        page: payload.page,
        rows: payload.rows
    };
    try {
        let data = await superagent.post(orgDetailUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询商品是否购买
 * @param {any} ctx 
 * @param {any} next 
 */
const checkBuyStatus = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(checkBuyStatusUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询购买的资源列表
 * @param {any} ctx 
 * @param {any} next 
 */
const queryMyResource = async (ctx, next) => {
    let payload = ctx.query;
    payload = {
        userId: payload.userId,
        pagination: {
            page: +payload.page,
            rows: +payload.rows
        }
    }
    try {
        let data = await superagent.post(myResourceUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询学段
 * @param {any} ctx 
 * @param {any} next 
 */
const queryPeriodList = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(queryPeriodListUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询学科
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const querySubjectList = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(querySubjectListUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询更多商铺
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const searchMerchant = async (ctx, next) => {
    let payload = req.query;
    payload.merchant = {
        shopName: payload.shopName
    }
    payload.pagination = {
        page: payload.page,
        rows: payload.rows
    }
    try {
        let data = await superagent.post(searchMerchantUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}


module.exports = {
    recommendResources,
    bannerUrl,
    courseRecommend,
    getRecentWebcast,
    queryVideoList,
    hasBuy,
    orgDetail,
    checkBuyStatus,
    queryMyResource,
    queryPeriodList,
    querySubjectList,
    searchMerchant
}
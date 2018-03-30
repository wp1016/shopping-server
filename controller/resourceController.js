/*
 * @Author: wangpan 
 * 资源接口列表
 * @Date: 2018-03-27 15:21:14 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 15:29:07
 */

const superagent = require("superagent");
const BASE_URL = `http://res.t.zjle.cn:20017`;
// const listUrl = `http://res.t.zjle.cn:20017/cms-gateway/solr/listZJResourcePage`;
const listUrl = `${BASE_URL}/cms-gateway/resLocalListPage`;
const detailUrl = `${BASE_URL}/cms-gateway/goMallresDetailInfo`;
const getSubjectUrl = `${BASE_URL}/cms-gateway/getRelatedSubjects`;
const getEditionsUrl = `${BASE_URL}/cms-gateway/getRelatedEditions`;
const getBooksUrl = `${BASE_URL}/cms-gateway/getRelatedTextbooks`;
const getPagesUrl = `${BASE_URL}/cms-gateway/chapterTree`;

/**
 * 资源列表
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getResourceList = async (ctx, next) => {
    let payload = ctx.query;
    payload.isPrice = 1;
    try {
        let data = await superagent.post(listUrl).set('Content-Type', 'application/json').send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 资源详情
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getResourceDetail = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(detailUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取学科
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getSubject = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(getSubjectUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取版本
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getEditions = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(getEditionsUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取教材
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getTextbooks = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(getBooksUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取章节
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getPage = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(getPagesUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}


module.exports = {
    getResourceList,
    getResourceDetail,
    getSubject,
    getEditions,
    getTextbooks,
    getPage
}
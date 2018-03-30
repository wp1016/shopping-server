/*
 * @Author: wangpan 
 * 直播相关接口列表
 * @Date: 2018-03-27 14:59:52 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 15:06:38
 */

const superagent = require("superagent");
// const httpProxy = require("../services/httpProxy");
const BASE_URL = `http://jdx.t.zjle.cn`;
const CourseLiveDetailUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/CourseLive`; // 直播详情
const LivePeriodListUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/LivePeriodList`; // 回放详情
const signUpUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/InsertLiveMember`; // 直播报名
const checkStatusUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/CheckLiveMember` // 查看是否购买
const updataBuyStatusUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/UpdateLiveMember`; // 同步直播购买数据

/**
 * 直播详情
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const courseLiveController = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(CourseLiveDetailUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 回放详情
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const livePeriodList = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(LivePeriodListUrl).send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 直播报名
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const signUp = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(signUpUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询是否报名（购买）
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const checkStatus = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(checkStatusUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 同步购买状态
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const updataBuyStatus = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(updataBuyStatusUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

module.exports = {
    courseLiveController,
    livePeriodList,
    signUp,
    updataBuyStatus,
    checkStatus
};
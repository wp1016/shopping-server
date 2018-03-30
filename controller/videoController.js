/*
 * @Author: wangpan 
 * 点播视频相关接口
 * @Date: 2018-03-27 14:25:31 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 14:54:32
 */

const superagent = require('superagent');
const BASE_URL = `http://jdx.t.zjle.cn`;
const coursecenterUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/coursecenter`;
const informationUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/Information`;
const getVideoUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/GetVideo`;
// const mallCheckStatusUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/BuyType`; //商城查询是否购买
const schoolCheckStatusUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/CheckBaoming`; // 基地校查询是否报名和购买
const updataSignUpStatusUrl = `${BASE_URL}/index.php?r=api/StudioJdxCourse/WriteBaoming` // 写入报名状态
/**
 * 点播详情
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const coursecenter = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(coursecenterUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

/**
 * 点播详情内章节相关资料
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const information = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(informationUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取点播资源地址
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getVideoSrc = async (ctx, next) => {
    let payload = ctx.query;
    try {
        let data = await superagent.post(getVideoUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询点播课程是否被购买
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const checkStatus = async (ctx, next) => {
    let payload = ctx.request.body
    try {
        let data = await superagent.post(schoolCheckStatusUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 写入报名状态
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const updataSignUpStatus = async (ctx, next) => {
    
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(updataSignUpStatusUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}

module.exports = {
    coursecenter,
    information,
    getVideoSrc,
    checkStatus,
    updataSignUpStatus
}
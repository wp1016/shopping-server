/*
 * @Author: wangpan 
 * 订单接口列表
 * @Date: 2018-03-27 14:07:59 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 14:23:32
 */

const superagent = require('superagent');
const BASE_URL = `http://scgateway.t.zjle.cn`;
const freeOrderUrl = `${BASE_URL}/shop-gateway/addSubcribe`; // 免费商品生成订单
const chargeOrderUrl = `${BASE_URL}/shop-gateway/createSubcribe`; // 收费商品生成订单
const cancelOrderUrl = `${BASE_URL}/shop-gateway/cancelSubcribe`; // 取消订单
const orderListUrl = `${BASE_URL}/shop-gateway/subcribeList`; // 订单列表
const alipayUrl = `${BASE_URL}/shop-gateway/buildAlipayOrder`; // 生成支付宝订单
const checkPayStatusUrl = `${BASE_URL}/shop-gateway/queryAlipayOrderState`; // 查询支付宝订单状态 
const delOrderUrl = `${BASE_URL}/shop-gateway/deleteSubcribe`; // 删除订单
const orderDetailUrl = `${BASE_URL}/shop-gateway/querySubcribeDetail/`

/**
 * 免费商品生成订单
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const freeOrder = async (ctx, next) => {
    let payload = ctx.requset.body;
    try {
        let data = await superagent.post(freeOrderUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 付费商品生成订单
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const chargeOrder = async (ctx, next) => {
    let payload = ctx.requset.body;
    try {
        let data = await superagent.post(chargeOrderUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 取消订单
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const cancelOrder = async (ctx, next) => {
    let payload = ctx.requset.body;
    try {
        let data = await superagent.post(cancelOrderUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 删除订单
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const delOrder = async (ctx, next) => {

    let payload = ctx.query;
    try {
        let data = await superagent.post(delOrderUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}

/**
 * 查询买家订单列表
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const queryOrderList = async (ctx, next) => {
    let payload = ctx.query;
    payload = {
        subscribe: {
            userId: payload.userId && payload.userId,
            isDelete: payload.isDelete && payload.isDelete,
            startTime: payload.startTime && payload.startTime,
            endTime: payload.endTime && payload.endTime,
            status: payload.status && payload.status
        },
        pagination: {
            page: payload.page && payload.page,
            rows: payload.rows && payload.rows
        }
    }
    try {
        let data = await superagent.post(orderListUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 生成支付宝订单
 * @param {any} ctx 
 * @param {any} next 
 */
const createAlipayOrder = async (ctx, next) => {
    let payload = ctx.requset.body;
    try {
        let data = await superagent.post(alipayUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 查询支付宝支付状态
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const checkPayStatus = async (ctx, next) => {
    let payload = ctx.requset.body;
    try {
        let data = await superagent.post(checkPayStatusUrl).send(payload);
        ctx.body = data.text;
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 订单详情
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const orderDetail = async (ctx, next) => {
    
    let payload = ctx.query;
    let url = orderDetailUrl + payload.id;
    try {
        let data = await superagent.get(url);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}


module.exports = {
    freeOrder,
    chargeOrder,
    cancelOrder,
    queryOrderList,
    createAlipayOrder,
    checkPayStatus,
    delOrder,
    orderDetail
}
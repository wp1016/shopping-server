/*
 * @Author: wangpan 
 * 登录相关接口
 * @Date: 2018-03-27 10:44:09 
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-28 15:22:43
 */

const superagent = require('superagent');
const BASE_URL = `http://yun.t.zjle.cn:20014`; // 3A 接口地址
const Loginurl = `${BASE_URL}/aamif/rest/account/login`; //account/login
const resetPasswordUrl = `${BASE_URL}/aamif/rest/forgetPassword/resetByAccount`; // 重置密码
const findPasswordUrl = `${BASE_URL}/aamif/rest/person/account/actCode/resetpassword`;
const getUserInfoUrl = `${BASE_URL}/aamif/rest/account/getuserinfo`;

const BASE_URL_ANTHOR = `http://yun.t.zjle.cn`;
const getAnswerUrl = `${BASE_URL_ANTHOR}/index.php?r=api/openAnswer/getanswer`; // 获取密保问题
const checkVerifyAnswerUrl = `${BASE_URL_ANTHOR}/index.php?r=api/openAnswer/qcheck`;
const getVerifyCodeUrl = `${BASE_URL_ANTHOR}/index.php?r=api/openAuthcode/getCode&w=100&h=35`;
const checkVerifyCodeUrl = `${BASE_URL_ANTHOR}/index.php?r=api/openAuthcode/verifyCode`; // 验证  &authCode=&authVal=


const svgCaptcha = require('svg-captcha');
/**
 * 登录接口
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const login = async (ctx, next) => {
    let payload = ctx.request.body;
    payload.portaltype = '0';
    try {
        let data = await superagent.post(Loginurl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

/**
 * 找回密码
 * @param {any} ctx 
 * @param {any} next 
 */
const findPassword = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(findPasswordUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 获取图片验证码
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getVerifyCode = async (ctx, next) => {
    /* try {
        let data = await superagent.post(getVerifyCodeUrl);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    } */
    try {
        let codeConfig = {
            size: 5, // 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            height: 35,
            width: 100
        }
        let captcha = svgCaptcha.create(codeConfig);
        ctx.session.captcha = captcha.text.toLowerCase();
        ctx.cookies.set('captcha')
        let codeData = {
            code: "000000",
            img: captcha.data
        }
        ctx.body = codeData
    } catch (err) {
        ctx.throw(500, err)
    }

}

/**
 * 验证图片验证码
 * @param {any} ctx 
 * @param {any} next 
 */
const checkVerifyCode = async (ctx, next) => {
    let payload = ctx.query;
    let captcha = ctx.session.captcha;
    if (captcha) {
        try {
            if (payload.authVal == captcha){
                ctx.body={
                    code:"000000",
                    msg:'验证通过'
                }
            }else{
                ctx.body={
                    code:"900001",
                    msg:"验证码输入错误"
                }
            }
        } catch (err) {
            ctx.throw(500, err)
        }
    } else {
        ctx.body = {
            code: "900002",
            msg: '验证码过期'
        }
    }

}

/**
 * 获取密保问题
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getVerifyAnswer = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(getAnswerUrl).set('Content-Type', 'application/x-www-form-urlencoded').send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 验证密保问题
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const checkVerifyAnswer = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(checkVerifyAnswerUrl).set('Content-Type', 'application/x-www-form-urlencoded').send(payload)
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 重置密码
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const resetPassword = async (ctx, next) => {
    let payload = ctx.request.body;
    try {
        let data = await superagent.post(resetPasswordUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}
/**
 * 通过用户名获取用户信息
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
const getUserInfo = async (ctx, next) => {
    let payload = {
        accountlist: [ctx.query.username]
    };
    try {
        let data = await superagent.post(getUserInfoUrl).send(payload);
        ctx.body = data.text
    } catch (err) {
        ctx.throw(500, err)
    }
}

module.exports = {
    login,
    findPassword,
    getVerifyCode,
    checkVerifyCode,
    getVerifyAnswer,
    checkVerifyAnswer,
    resetPassword,
    getUserInfo
}
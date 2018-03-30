/*
 * @Author: wangpan 
 * @Date: 2018-03-27 10:35:58 
 * 用户控制器
 * @Last Modified by: wangpan
 * @Last Modified time: 2018-03-27 10:39:02
 */

const test = async (ctx, next) => {
    ctx.body='hello，koa2'
}

module.exports={
    test
}
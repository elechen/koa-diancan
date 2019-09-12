import Koa = require('koa')
import jwt = require('jsonwebtoken')
import * as config from '../config'

export function exec(ctx: Koa.ParameterizedContext, next) {
    ctx.response.type = 'application/json'
    const data = { nickname: "chenxiaofeng" }
    const token = jwt.sign({
        uuid: 10000
    }, config.jwt_secret, { expiresIn: 3600 })
    ctx.response.body = { code: 0, data, token }
}
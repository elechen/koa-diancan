import Koa = require('koa')
import login = require("./login")

export function dispatch(ctx: Koa.ParameterizedContext, next) {
    const action = ctx.params.action
    if (action === "login"){
        login.exec(ctx, next)
    }
}
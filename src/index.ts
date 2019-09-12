import Koa = require('koa')
import Router = require('@koa/router')
import cors = require('@koa/cors')
import jwt = require('koa-jwt')
import api = require('./api/api')
import * as config from './config'
import login = require("./api/login")

let router = new Router()
const app = new Koa()

app.use(jwt({ secret: config.jwt_secret }).unless(
    {path: [/\/api\/login/]}
))

router.get('/', index)
    .all('/api/:action', api.dispatch)

async function index(ctx: Koa.ParameterizedContext) {
    ctx.response.type = 'text'
    ctx.response.body = 'Welcome to a Koa server'
}

app.use(cors())

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(8090)

console.log("server runs at http://localhost:8090")
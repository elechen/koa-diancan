import Koa = require('koa')
const app = new Koa()

app.use(async function (ctx: Koa.Context, next: Function) {
    ctx.body = 'Hello Koa'
})

app.listen(8080)

console.log("server runs at http://localhost:8080")
import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import json from 'koa-json'
import 'reflect-metadata'
import router from './router'

const app = new Koa()
const port = process.env.PORT || 8080

// middlewares
app.use(logger())
app.use(helmet())
app.use(cors())
app.use(json())
app.use(bodyParser())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err: any) {
    ctx.status = err.status || 500
    ctx.body = err.message
      .replaceAll('[32m', '')
      .replaceAll('[33m', '')
      .replaceAll('[39m', '') // This removes the console colour modifications from the error log

    ctx.app.emit('error', err, ctx)
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`)
})

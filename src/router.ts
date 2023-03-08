import { Context } from 'koa'
import Router from '@koa/router'

const router = new Router()

const helloWorld = (ctx: Context) => {
  const name = ctx.request.query.name
  const text = 'Hello World!!!!'

  if (!name || typeof name != 'string')
    throw new Error('name required, no name present in request')

  const typeCheck = (text: string) => text
  // typeCheck(3)  // this fails typechecking

  const secondText = typeCheck(name)

  ctx.body = text + secondText
}

router.get('/', helloWorld)

router.get('/error', async ctx => {
  ctx.throw(500, 'error')
})

export default router

import Router from '@koa/router'

const router = new Router()

const helloWorld = (ctx: any) => {
    const text: string = 'Hello World!!!!'

    const typeCheck = (text: string) => text
    // typeCheck(3)  // this fails typechecking

    const secondText = typeCheck(ctx.request.query.name)

    ctx.body = text + secondText
}

router.get('/', helloWorld)

router.get('/error', async (ctx) => {
    ctx.throw(500, 'error');
});

export default router;
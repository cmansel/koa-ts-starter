import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import json from 'koa-json';
import 'reflect-metadata';
import router from './router';

const app = new Koa()
const port = process.env.PORT || 8082;

// middlewares
app.use(logger())
app.use(helmet());
app.use(cors());
app.use(json());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
    console.log(err);
});

app.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`);
});
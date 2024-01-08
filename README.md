# koa-ts-starter
A starter setup for typescript and koa that includes:
- `eslint`
- `prettier`
- `nodemon`
- `Dockerfile` for production build

## Development
To setup the development environment, in an environment with node16 installed run:
```
npm install
npm run dev
```

Test the example route using this curl command:
```
curl http://localhost:8080/\?name\=yourname
```


## Prod build
The provided Dockerfile builds a production server image with only prod dependencies installed

### eslint & prettier CI check
eslint and prettier are run in the Dockerfile build. This makes setting up an initial CI pipeline simply `docker build .`

If you'd prefer to break out linting and formatting checks in your CI pipeline, remove `RUN npm run lint`, `RUN npm run format-ci` from the Dockerfile

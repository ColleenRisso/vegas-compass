const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
const PORT = process.env.PORT || 5555;
const app = new Koa()

const ordersRouter = require('./routes/orders');

app.use(cors({ allowMethods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'] }))
    .use(bodyparser({ enableTypes: ['json'] }))
    .use(ordersRouter.routes())

const server = app.listen(PORT, () => {
    console.log('The server is running at http://localhost:' + PORT); // eslint-disable-line no-console
});

module.exports = server;
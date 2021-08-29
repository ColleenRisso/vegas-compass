const Koa = require('koa');
const logger = require('koa-logger');
const mount = require('koa-mount');
const { resolve } = require('path');

const PORT = '3002';

const server = new Koa();
server.use(logger());

const users = require(resolve(__dirname, 'routes', 'users'));
const entries = require(resolve(__dirname, 'routes', 'entries'));
server.use(mount('/users', users));
server.use(mount('/entries', entries));

server.listen(PORT, () => {
    console.log('The server is running at http://localhost:' + PORT);
});

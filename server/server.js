import { create, defaults, bodyParser, router } from 'json-server';
const server = create();
const middlewares = defaults();

server.use(middlewares);

server.use(bodyParser);

server.use('/', router('db.json'));

server.listen(3000, () => {
  console.log('JSON Server is running');
});
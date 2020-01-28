require('dotenv').config()

import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';

// load all injectable entities.
// the @provide() annotation will then automatically register them.
import './inversify/ioc/loader';
import { Container } from 'inversify';
import { RaidStore } from './api/raids/raid.store';
import { DatastoreGoogleCloud } from './api/datastore.google-cloud';

let container = new Container();
container.bind<RaidStore>(RaidStore).toSelf();
container.bind<DatastoreGoogleCloud>(DatastoreGoogleCloud).toSelf();
// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);
console.log('Server started on port 3000 :)');

exports = module.exports = app;
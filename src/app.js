const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');

const dbconnection = require('../src/database/dbconnection');
const config = require('../config/config');

const homeRouter = require('./home/home.routes');
const adminRouter = require('./admin/admin.routes');
const categoryRouter = require('./category/category.routes');
const documentRouter = require('./document/document.routes');

app.use(
  session({
    secret: config.secret_express,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 86400000,
    },
  })
);

/*app.use(session({
    secret: config.secret_express,
    cookie: {maxAge: 36000000}
}));*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view egine', 'ejs');
app.use(express.static('public'));

dbconnection
  .authenticate()
  .then(() => {
    console.log('connected database');
  })
  .catch((err) => {
    console.error('database connection failed: ', err);
  });

app.use('/', homeRouter);
app.use('/', categoryRouter);
app.use('/', documentRouter);
app.use('/', adminRouter);

module.exports = app;

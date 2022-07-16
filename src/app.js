const express = require('express');
const app = express();
const homeRouter = require('./home/home.routes');
const categoryRouter = require('./category/category.routes');
const documentRouter = require('./document/document.routes');
const bodyParser = require('body-parser');
const dbconnection = require('../src/database/dbconnection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view egine', 'ejs');
app.use(express.static('public'));

dbconnection
    .authenticate()
    .then(()=>{
        console.log('connected database');
    }).catch((err)=>{
        console.error('database connection failed: ', err);
    });

app.use('/', homeRouter);
app.use('/', categoryRouter);
app.use('/', documentRouter);

module.exports = app;
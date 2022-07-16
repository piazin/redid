const express = require('express');
const app = express();
const homeRouter = require('./home/home.routes');
const bodyParser = require('body-parser');
const dbconnection = require('../src/database/dbconnection');

dbconnection
    .authenticate()
    .then(()=>{
        console.log('connected database');
    }).catch((err)=>{
        console.error('database connection failed: ', err);
    });

app.use('/', homeRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view egine', 'ejs');
app.use(express.static('public'));

module.exports = app;
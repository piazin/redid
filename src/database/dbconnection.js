const Sequelize = require('sequelize');
const config = require('../../config/config');

const {name, user, password, host, dialect} = config.database;

const dbconnection = new Sequelize(name, user, password, {
    host: host,
    dialect: dialect
});

module.exports = dbconnection;
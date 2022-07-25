const Sequelize = require('sequelize');
const dbconnection = require('../database/dbconnection');

const Admin = dbconnection.define('admin', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Admin;
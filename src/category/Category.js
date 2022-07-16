const Sequelize = require('sequelize');
const dbconnection = require('../database/dbconnection');

const Category = dbconnection.define('category', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },   
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Category;
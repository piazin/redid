const Sequelize = require('sequelize');
const dbconnection = require('../database/dbconnection');
const Category = require('../category/Category');

const Document = dbconnection.define('document', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    dateCreate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlThumbnail: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Document);
Document.belongsTo(Category);

module.exports = Document;
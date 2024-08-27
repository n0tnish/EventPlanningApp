// server/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('event_planning', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

// server/models/Event.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    coverPhoto: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

Event.belongsToMany(User, { through: 'EventAttendees' });
User.belongsToMany(Event, { through: 'EventAttendees' });

module.exports = Event;

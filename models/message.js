'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../db');

const userMessages = instance.sequelize.define('messages', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  messages: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER
  },
},
{
  createdAt: true,
  updatedAt: true,
  tableName: 'messages',
})
exports.model = userMessages;
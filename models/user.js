'use strict';
const {DataTypes, Sequelize} = require('sequelize');
const instance = require('../db');

const user = instance.sequelize.define('users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  confirmpassword: {
    type: DataTypes.STRING
  },
},
{
  createdAt: true,
  updatedAt: true,
  tableName: 'users',
})
exports.model = user;
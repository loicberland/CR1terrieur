const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model{}
User.init({
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
},{
  sequelize,
  tableName:"user"
})

module.exports = User
const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Realization extends Model{}
Realization.init({
  title: DataTypes.STRING,
},{
  sequelize,
  tableName:"realization"
})

module.exports = Realization
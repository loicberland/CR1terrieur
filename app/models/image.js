const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Image extends Model {}
Image.init({
  title:DataTypes.STRING,
  link:DataTypes.TEXT
},{
  sequelize,
  tableName: "image"
})

module.exports = Image
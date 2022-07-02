const Realization = require('./realization');
const Image = require('./image');
const User = require('./user');

Realization.belongsTo(Image,{
  foreignKey: "image_id",
  as: "mainImage"
})

Realization.hasMany(Image,{
  foreignKey: "realization_id",
  as: "images"
})

Image.belongsTo(Realization,{
  foreignKey: "realization_id",
  as: "realization"
})

module.exports = { Realization, Image, User }
const { Realization } = require('../models/index')

const realizationController = {
  findAll: async function(req,res){
    try {
      const realizations = await Realization.findAll({
        include : ["mainImage"]
      })
      res.render('realizations',{realizations});
    } catch (error) {
      console.error(error)
      res.status(500).send(`Impossible de récupérer les réalisations`)
    }
  },
  findOne: async function(req,res){
    const id = req.params.id;
    try {
      const realization = await Realization.findByPk(id,{
        include:"images"
      })
      res.render('realization',{realization})
    } catch (error) {
      console.error(error)
      res.status(500).send(`Impossible de récupérer la réalisation`)
    }
  },
}
module.exports = realizationController;
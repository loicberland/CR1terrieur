const{ User } = require('../models/index')
const bcrypt = require('bcrypt');

const adminController = {
  getView: function(req,res){
    res.render('login')
  },
  login: async function(req,res){
    const{ email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if(!user){
        return res.render('login',{error:`Email incorrect`})
      }
      if(! await bcrypt.compare(password,user.password)){
        return res.render('login',{error:`Mot de passe incorrect`})
      }
      req.session.user = user
      req.session.user.password = ''
      res.redirect('./');
    } catch (error) {
      console.error(error)
      res.status(500).send('Server Error');
    }
  },
  logOut: function(req,res){
    req.session.user = undefined;
    res.redirect('./');
  },
};

module.exports = adminController;
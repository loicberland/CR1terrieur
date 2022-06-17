const viewController = {
  getHome: function(req,res){
    res.render('home')
  },
  getIntroduction: function(req,res){
    res.render('introduction')
  },
  getAchievements: function(req,res){
    res.render('achievements')
  },
  getAbout: function(req,res){
    res.render('about')
  },
  getContact: function(req,res){
    res.render('contact')
  },
}

module.exports = viewController;
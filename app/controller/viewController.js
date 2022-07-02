const viewController = {
  getHome: function(req,res){
    res.render('home')
  },
  getservices: function(req,res){
    res.render('services')
  },
  getAbout: function(req,res){
    res.render('about')
  },
  getContact: function(req,res){
    res.render('contact')
  },
}

module.exports = viewController;
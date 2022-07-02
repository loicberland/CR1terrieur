const express = require('express');
const router = express.Router();

const viewController = require('./controller/viewController')
const realizationController = require('./controller/realizationController')
const adminController = require('./controller/adminController')

const isLogin = require('./middlewares/isLogin')

router.get('/admin',isLogin,adminController.getView);
router.post('/admin',isLogin,adminController.login);
router.get('/logOut',adminController.logOut);

router.get('/',viewController.getHome)
router.get('/services',viewController.getservices)
router.get('/about',viewController.getAbout)
router.get('/contact',viewController.getContact)

router.get('/realizations',realizationController.findAll)
router.get('/realizations/add',realizationController.addOne)            
// Attention bien appeler la route /realizations/:id en dernier sinon elle écrassera les autres routes
router.get('/realizations/:id',realizationController.findOne)

module.exports = router
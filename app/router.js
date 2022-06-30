const express = require('express');
const router = express.Router();

const viewController = require('./controller/viewController')
const realizationController = require('./controller/realizationController')

router.get('/',viewController.getHome)
router.get('/services',viewController.getservices)
router.get('/about',viewController.getAbout)
router.get('/contact',viewController.getContact)

router.get('/realizations',realizationController.findAll)
router.get('/realizations/:id',realizationController.findOne)


module.exports = router
const express = require('express');
const router = express.Router();

const viewController = require('./controller/viewController')
const realizationCOntroller = require('./controller/realizationController')

router.get('/',viewController.getHome)
router.get('/services',viewController.getservices)
router.get('/realizations',viewController.getAchievements)
router.get('/about',viewController.getAbout)
router.get('/contact',viewController.getContact)

// router.get('/realizations',realizationCOntroller.findAll)


module.exports = router
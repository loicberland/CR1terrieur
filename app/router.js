const express = require('express');
const router = express.Router();

const viewController = require('./controller/viewController')

router.get('/',viewController.getHome)
router.get('/introduction',viewController.getIntroduction)
router.get('/achievements',viewController.getAchievements)
router.get('/about',viewController.getAbout)
router.get('/contact',viewController.getContact)

module.exports = router
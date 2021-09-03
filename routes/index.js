const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller.js');

router.get('/', homeController.home);  //Render the Home page from Home Controller
router.post('/upload/image', homeController.upload);
module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controller/home');

router.get('/', userController.test);
router.post('/favorite', userController.addFavorites);


module.exports = router;
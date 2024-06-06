const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user/:email', userController.getUserByEmail);

module.exports = router;

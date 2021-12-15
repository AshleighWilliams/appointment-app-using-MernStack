const express = require('express');
const router = express.Router();

const {registerUser, loginUser, idUser} = require('../controllers/auth.controller');

router.post('/register', registerUser)//route to register a user
router.post('/login', loginUser)//route to log in user
router.post('/id', idUser)//route to identify a user when adding an appointment to send user and token in response with new appointments added to the user

module.exports = router;
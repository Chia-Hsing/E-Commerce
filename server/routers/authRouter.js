const express = require('express')

const authController = require('../controllers/authController')
const validator = require('../middlewares/validator')

const router = new express.Router()

router.post('/signup', validator.signupAuthenticate, authController.postSignup)
router.post('/login', validator.loginAuthenticate, authController.postLogin)

module.exports = router

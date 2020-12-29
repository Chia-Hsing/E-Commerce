const express = require('express')

const authController = require('../controllers/authController')
const validator = require('../middlewares/validator')
const { validationMessage } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/signup', validator.signupAuthenticate, validationMessage, authController.postSignup)
router.post('/login', validator.loginAuthenticate, validationMessage, authController.postLogin)

module.exports = router

const express = require('express')

const userController = require('../controllers/userController')

const router = new express.Router()

router.get('/profile', userController.getUserProfile)
router.put('/profile', userController.putUserProfile)

router.get('/order', userController.getUserOrder)
router.get('/canceledOrder', userController.getUserCanceledOrder)
router.get('/history', userController.putUserOrderHistory)

module.exports = router

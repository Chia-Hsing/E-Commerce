const express = require('express')

const userController = require('../controllers/userController')
const { auth } = require('../middlewares/middleware')

const router = new express.Router()

router.get('/profile', auth, userController.getUserProfile)
// router.put('/profile', auth, userController.putUserProfile)

// router.get('/order', auth, userController.getUserOrder)
// router.get('/canceledOrder', auth, userController.getUserCanceledOrder)
// router.get('/history', auth, userController.putUserOrderHistory)

module.exports = router

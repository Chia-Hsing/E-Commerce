const express = require('express')

const userController = require('../controllers/userController')
const validator = require('../middlewares/validator')
const { auth, upload, validationMessage } = require('../middlewares/middleware')

const router = new express.Router()

router.get('/profile', auth, userController.getUserProfile)
router.patch(
    '/profile',
    auth,
    upload.single('avatar'),
    validator.checkUserProfileUpdate,
    validationMessage,
    userController.patchUserProfile
)

router.get('/customer', auth, userController.getCustomer)
router.post('/customer', auth, validator.checkDeliveryInfo, validationMessage, userController.postCustomer)

// router.get('/order', auth, userController.getUserOrder)
// router.get('/canceledOrder', auth, userController.getUserCanceledOrder)
// router.get('/history', auth, userController.putUserOrderHistory)

module.exports = router

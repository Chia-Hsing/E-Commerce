const express = require('express')
const adminController = require('../controllers/adminController')
const validator = require('../middlewares/validator')
const { upload, validationMessage } = require('../middlewares/middleware')

const router = new express.Router()

router.post(
    '/product',
    validator.createNewProduct,
    upload.single('image'),
    validationMessage,
    adminController.postProduct
)

router.post('/category', validator.createNewCategory, validationMessage, adminController.postCategory)

// router.get('/product')
// router.put('/product')
// router.delete('/product')

module.exports = router

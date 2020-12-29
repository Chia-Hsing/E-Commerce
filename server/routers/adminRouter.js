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
// router.get('/product')
// router.put('/product')
// router.delete('/product')

router.post('/category', validator.createNewCategory, validationMessage, adminController.postCategory)

module.exports = router

const express = require('express')
const adminController = require('../controllers/adminController')
const validator = require('../middlewares/validator')
const { upload } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/product', upload.single('image'), validator.createNewProduct, adminController.postProduct)
// router.get('/product')
// router.put('/product')
// router.delete('/product')

router.post('/category', validator.createNewCategory, adminController.postCategory)

module.exports = router

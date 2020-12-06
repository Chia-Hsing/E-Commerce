const express = require('express')
const cors = require('cors')
const adminController = require('../controllers/adminController')
const validator = require('../middlewares/validator')
const { upload } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/product', cors(), upload.single('image'), validator.createNewProduct, adminController.postProduct)
// router.get('/product')
// router.put('/product')
// router.delete('/product')

router.post('/category', cors(), validator.createNewCategory, adminController.postCategory)

module.exports = router

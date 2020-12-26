const express = require('express')
const productController = require('../controllers/productController')

const router = new express.Router()

router.get('/', productController.getProducts)
router.get('/product/:PID', productController.getProduct)

module.exports = router

const express = require('express')
const Product = require('../models/product')
const adminController = require('../controllers/adminController')

const router = express.Router()

// router.get('/product')
router.post('/product', adminController.postProduct)
// router.put('/product')
// router.delete('/product')

module.exports = router

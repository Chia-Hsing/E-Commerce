const express = require('express')

const orderController = require('../controllers/orderController')
const { auth, bagItemToken } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/', auth, orderController.postOrder)
router.delete('/:UID', auth, orderController.deleteOrder)

module.exports = router

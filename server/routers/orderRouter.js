const express = require('express')

const orderController = require('../controllers/orderController')
const { auth, bagItemToken } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/:UID', auth, bagItemToken, orderController.postOrder)

router.get('/latest', orderController.getLatestOrder)
router.get('/latest/edit/:OID', orderController.getEditLatestOrder)
router.put('/latest/:OID', orderController.putLatestOrder)
router.put('/latest/cancel/:OID', orderController.putCancelLatestOrder)

module.exports = router

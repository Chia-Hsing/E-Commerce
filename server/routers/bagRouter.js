const bagController = require('../controllers/bagController')
const validator = require('../middlewares/validator')
const { bagItemToken } = require('../middlewares/middleware')

const express = require('express')

const router = new express.Router()

router.post('/:id', validator.addItemToBag, bagItemToken, bagController.addItemToBag)
router.put('/:id', validator.addItemToBag, bagItemToken, bagController.deleteItemFromBag)

module.exports = router

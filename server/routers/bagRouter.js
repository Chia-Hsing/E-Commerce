const express = require('express')

const bagController = require('../controllers/bagController')
const validator = require('../middlewares/validator')
const { bagItemToken, validationMessage } = require('../middlewares/middleware')

const router = new express.Router()

router.post('/:id', validator.bagOperation, validationMessage, bagItemToken, bagController.addItemToBag)
router.put('/:id', validator.bagOperation, validationMessage, bagItemToken, bagController.deleteItemFromBag)
router.put('/remove/:id', validator.bagOperation, validationMessage, bagItemToken, bagController.removeWholeItem)
router.delete('/', bagController.cleanBag)

module.exports = router

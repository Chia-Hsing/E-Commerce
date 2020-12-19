const bagController = require('../controllers/bagController')
const validator = require('../middlewares/validator')
const { bagItemToken } = require('../middlewares/middleware')

const express = require('express')

const router = new express.Router()

router.post('/:id', validator.bagOperation, bagItemToken, bagController.addItemToBag)
router.put('/:id', validator.bagOperation, bagItemToken, bagController.deleteItemFromBag)
router.put('/remove/:id', validator.bagOperation, bagItemToken, bagController.removeWholeItem)
router.delete('/', bagController.cleanBag)

module.exports = router

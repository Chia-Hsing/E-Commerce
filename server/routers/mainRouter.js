const express = require('express')
const mainController = require('../controllers/mainController')

const router = new express.Router()

router.get('/', mainController.getMainMaterials)
// router.get('')

module.exports = router

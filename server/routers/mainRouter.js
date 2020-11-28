const express = require('express')
const mainController = require('../controllers/mainController')
const cors = require('cors')

const router = new express.Router()

router.get('/', cors(), mainController.getMainMaterials)

module.exports = router

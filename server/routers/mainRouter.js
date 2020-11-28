const express = require('express')
const cors = require('cors')
const mainController = require('../controllers/mainController')

const router = new express.Router()

router.get('/', cors(), mainController.getMainMaterials)

module.exports = router

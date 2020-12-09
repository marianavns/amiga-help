require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/angelsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
// router.get('/anything', controller.anything)
// router.get('/anything', controller.anything)
// router.patch('/anything', controller.anything)
// router.delete('/anything', controller.anything)

module.exports = router
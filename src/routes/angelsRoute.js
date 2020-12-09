require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/angelsController')

router.post('/', controller.create)
router.get('/:languages?', controller.readByLanguage)
router.get('/', controller.readAll)
router.get('/linux', controller.readByLinux)
// router.patch('/anything', controller.anything)
// router.delete('/anything', controller.anything)

module.exports = router
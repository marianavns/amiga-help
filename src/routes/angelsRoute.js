require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/angelsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/linguagem/:languages?', controller.readByLanguage)
router.get('/linux', controller.readByLinux)
router.patch('/:_id', controller.updateAngelByID)
router.delete('/:_id', controller.deleteAngelByID)

module.exports = router
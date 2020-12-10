require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/angelsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/linguagem/:languages?', controller.readByLanguage)
router.get('/username/:userName?', controller.readByUserName)
router.get('/linux', controller.readByLinux)
router.patch('/:userName', controller.updateByUserName)
router.put('/:_id', controller.updateByID)
router.delete('/:userName', controller.deleteByUserName)

module.exports = router
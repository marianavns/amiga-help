require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/blessedsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/minhasduvidas', controller.readQuestionsByUserName)


module.exports = router
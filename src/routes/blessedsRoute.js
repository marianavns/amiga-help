require('dotenv-safe').config()

const express = require('express')
const router = express.Router()
const controller = require('../controller/blessedsController')

router.post('/', controller.create)
router.get('/', controller.readAll)
router.get('/minhasduvidas/:userName?', controller.readQuestionsByUserName)
router.get('/linguagem/:needLanguage?', controller.readQuestionsByLanguage)
router.get('/id/:_id?', controller.readQuestionByID)
router.put('/:id', controller.updateQuestionByID)
router.patch('/:username?', controller.updateBlessedByUserName)
router.delete('/:id', controller.deleteQuestionByID)
router.delete('/:username?', controller.deleteBlessedByUserName)


module.exports = router
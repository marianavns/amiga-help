const express = require('express')
const router = express.Router()

router.get('/', function (request, response) {
  response.status(200).send({
    title: "Amiga, help!",
    version: "1.0.0",
    owner: "github.com/marianavns"
  })
})

module.exports = router

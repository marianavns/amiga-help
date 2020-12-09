const blesseds = require("../model/blesseds")

const fs = require('fs')

const create = (request, response) => {

    criticalData1 = request.body.firstName
    criticalData2 = request.body.needLanguage

    if (criticalData1 == undefined || criticalData2 == undefined ) {
        return response.status(200).send({ aviso : `Adicionar seu nome e a linguagem para a qual você precisa de uma mãozinha é fundamental para aceitá-la neste site.`})
    }

    if (criticalData1.length <= 1) {
        return response.status(200).send({ aviso : `O nome adicionado tem menos de 2 letras... Confere pra gente te conhecer!`})
    }


    let blessed = new blesseds(request.body)
    blessed.save(function(err){
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(201).send({ message : `Recebemos seu cadastro! <3`})
        }
    })
}

const readAll = (request, response) => {
    blesseds.find(function (err, results) {
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(200).send(results)
        }
    })
}


module.exports = {
    create,
    readAll
}
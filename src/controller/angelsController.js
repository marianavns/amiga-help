const angels = require( '../model/angels.js' )

const fs = require('fs')

const create = (request, response) => {

    criticalData1 = request.body.firstName
    criticalData2 = request.body.language

    if (criticalData1 == undefined || criticalData2 == undefined ) {
        return response.status(200).send({ err : `knowing angel's first name and language is critical. please enter both information correctly.`})
    }

    if (criticalData1.length <= 1) {
        return response.status(200).send({ err : `added angel name has less than two letters. please check this information.`})
    }

    let angel = new angels(request.body)
    angel.save(function(err){
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(201).send({ message : `angel [${criticalData1}] was added successfully.`})
        }
    })
}


const readAll = (request, response) => {
    angels.find(function (err, results) {
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
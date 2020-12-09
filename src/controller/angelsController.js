const angels = require( '../model/angels.js' )

const fs = require('fs')

const create = (request, response) => {

    criticalData1 = request.body.firstName
    criticalData2 = request.body.languages

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

const readByLanguage = (request, response) => {
    const inputLanguage = request.query.languages
    angels.find(
        { languages: inputLanguage}, 
        '-_id firstName languages email othersContacts', 
        function (err, results) {
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send(results)
            }
        }
    )
}

const readByLinux = (request, response) => {
    angels.find(
        { linux : true },
        '-_id firstName languages email othersContacts',
        function (err, result) {
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send(result)
            }
    })
}

const updateAngelByID = (request, response) => {
    const inputID = request.params._id
    const updateEntry = request.body
    angels.updateMany(
        { _id: inputID },
        { $set : updateEntry }, 
        { upsert : true },
        function(err){
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send({ message : `Attributes: [${Object.keys(updateEntry)}] have been updated successfully.`})
            }
        }
    )
}

const deleteAngelByID = (req, res) => {
    const id = req.params._id
    angels.deleteMany(
        {_id : id },
        function(err){
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message : `ID Doc ${id} was been deleted.`})
            }
        }
    )
}


module.exports = {
    create,
    readAll,
    readByLanguage,
    readByLinux,
    updateAngelByID,
    deleteAngelByID
}
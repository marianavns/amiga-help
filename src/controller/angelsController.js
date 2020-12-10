const angels = require( '../model/angels.js' )

const fs = require('fs')

const create = (request, response) => {

    criticalData1 = request.body.userName
    criticalData2 = request.body.languages
    criticalData3 = request.body.contact

    if (criticalData1 == undefined || criticalData2 == undefined || criticalData3 == undefined) {
        return response.status(200).send({ err : `userName, languages and contact are criticals datas. please enter all informations correctly.`})
    }

    if (criticalData1.length <= 2) {
        return response.status(200).send({ err : `angel's userName has less than 3 letters. please check this information.`})
    }

    if (criticalData2.length <= 0) {
        return response.status(200).send({ err : `please add your programming language.`})
    }

    if (criticalData3.length <= 8) {
        return response.status(200).send({ err : `angel's contact has less than 7 letters. please check this information.`})
    }

    let angel = new angels(request.body)
    angel.save(function(err){
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(201).send({ message : `angel with userName ${criticalData1} was added successfully.`})
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
        '-_id firstName userName technologies languages contact othersContacts', 
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
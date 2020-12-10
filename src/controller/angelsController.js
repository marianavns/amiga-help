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

const readByUserName = (request, response) => {
    const inputUserName = request.query.userName
    angels.find(
        { userName: inputUserName}, 
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
        '-_id firstName userName technologies languages contact othersContacts',
        function (err, result) {
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send(result)
            }
    })
}

const updateByUserName = (request, response) => {
    const inputUserName = request.params.userName
    const updateEntry = request.body
    angels.updateMany(
        { userName: inputUserName },
        { $set : updateEntry }, 
        { upsert : true },
        function(err){
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send({ message : `${inputUserName} ${Object.keys(updateEntry)} attributes have been updated successfully.`})
            }
        }
    )
}

const deleteByUserName = (request, response) => {
    const inputUserName = request.params.userName
    angels.deleteMany(
        { userName : inputUserName },
        function(err){
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send({ message : `angel's ${inputUserName} docs was deleted successfully.`})
            }
        }
    )
}


module.exports = {
    create,
    readAll,
    readByLanguage,
    readByUserName,
    readByLinux,
    updateByUserName,
    deleteByUserName
}
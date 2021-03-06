const blesseds = require("../model/blesseds")

const fs = require('fs')
const bcrypt = require('bcrypt')

const create = (request, response) => {

    criticalData1 = request.body.userName
    criticalData2 = request.body.needLanguage
    criticalData3 = request.body.question
    criticalData4 = request.body.contact

    if (criticalData1 == undefined || criticalData2 == undefined || criticalData3 == undefined || criticalData4 == undefined) {
        return response.status(200).send({ warning : `/userName/, /needLanguage/, /questioning/ and /contact/ are criticals datas. please enter all informations correctly.`})
    }

    if (criticalData1.length <= 2) {
        return response.status(200).send({ warning : `blessed's userName has less than 3 letters. please check this information.`})
    }

    if (criticalData2.length <= 0) {
        return response.status(200).send({ warning : `please add the programming language where the question comes from. please check this information.`})
    }

    if (criticalData3.length <= 5) {
        return response.status(200).send({ warning : `it is important to add some note about the question to guide the volunteers. please check this information.`})
    }

    if (criticalData4.length <= 9) {
        return response.status(200).send({ warning : `contact added has less than 10 letters. please check this information.`})
    }

    const passwordHash = bcrypt.hashSync(request.body.password, 10)
    request.body.password = passwordHash 
    
    let blessed = new blesseds(request.body)
    blessed.save(function(err){
        if (err) {
           return response.status(500).send({ message: err.message })
        } 
        response.status(201).send({ message : `new blessed has been added successfully.`})
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

const readQuestionsByUserName = (request, response) => {
    const inputUserName = request.query.userName
    blesseds.find(
        { userName: inputUserName}, 
        (err, results) => {
            if (err) {
                return response.status(500).send({ message: err.message })
            }
            response.status(200).send(results)
        }
    )
}

const readQuestionsByLanguage = (request, response) => {
    const inputLanguage = request.query.needLanguage
    blesseds.find(
        { needLanguage: inputLanguage}, 
        'needLanguage question userName contact availableTime', 
        function (err, results) {
            if (err) {
                response.status(500).send({ message: err.message })
            } else {
                response.status(200).send(results)
            }
        }
    )
}

const readQuestionByID = (request, response) => {
    const inputID = request.query.id
    blesseds.find(
        { _id: inputID },
        (err, results) => {
            if (err) {
               return response.status(500).send({ message: err.message })
            } 
            response.status(200).send(results)
        }
    )
}

const updateQuestionByID = (request, response) => {
    const inputID = request.params.id
    const updateEntry = request.body
    blesseds.updateOne(
        { _id : inputID }, 
        { $set : updateEntry }, 
        { upsert : false }, 
        (err) => {
            if (err) {
                return response.status(500).send({ message: err.message })
            }
        return response.status(200).send({ message : `${Object.keys(updateEntry)} attributes in doc _id ${inputID} have been updated successfully.`});
        }
    )
}

const updateBlessedByUserName = (request, response) => {
    const inputUserName = request.query.username
    const updateEntry = request.body
    blesseds.updateMany(
        { userName : inputUserName },
        { $set : updateEntry }, 
        { upsert : false },
        (err) => {
            if (err) {
                return response.status(500).send({ message: err.message })
            }
            response.status(200).send({ message : `${inputUserName} ${Object.keys(updateEntry)} attributes have been updated successfully.`})
        }
    )
}

const deleteQuestionByID = (request, response) => {
    const inputID = request.params.id
    blesseds.deleteOne(
        { _id : inputID },
        (err) => {
            if (err) {
                return response.status(500).send({ message: err.message })
            } 
            return response.status(200).send({ message : `${inputID} doc was deleted successfully.`})
        }
    )
}


const deleteBlessedByUserName = (request, response) => {
    const inputUserName = request.query.username
    blesseds.deleteMany(
        { userName : inputUserName },
        (err) => {
            if (err) {
                return response.status(500).send({ message: err.message })
            } 
            response.status(200).send({ message : `${inputUserName} doc was deleted successfully.`})
        }
    )
}


module.exports = {
    create,
    readAll,
    readQuestionsByUserName,
    readQuestionsByLanguage,
    readQuestionByID,
    updateQuestionByID,
    updateBlessedByUserName,
    deleteQuestionByID,
    deleteBlessedByUserName
}
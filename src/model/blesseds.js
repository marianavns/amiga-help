const mongoose = require('mongoose')

const blessedsSchema = new mongoose.Schema({
    firstName: String,
    userName: String,
    fullName: String,
    yearOfBirth: Number,
    needScope: String,
    needTechnology: String,
    needLanguage: String,
    question: String,
    linux: Boolean,
    availableTime: Array,
    contact: String,
    linkedin: String,
    othersContacts: Array,
    observations: String,
},{
    versionKey: false
})

// critical datas: userName, needLanguage, question, contact
const blesseds = mongoose.model('blesseds', blessedsSchema)

module.exports = blesseds
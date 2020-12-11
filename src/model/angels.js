const mongoose = require('mongoose')

const angelsSchema = new mongoose.Schema({
    firstName: String,
    userName: String,
    fullName: String,
    password: String,
    yearOfBirth: Number,
    scope: Array,
    technologies: Array,
    languages: Array,
    linux: Boolean,
    availableTime: Array,
    contact: String,
    linkedin: String,
    othersContacts: Array,
    observations: String,
},{
    versionKey: false
})

// critical datas: userName, languages, contact
const angels = mongoose.model('angels', angelsSchema)

module.exports = angels


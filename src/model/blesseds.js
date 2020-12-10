const mongoose = require('mongoose')

const blessedsSchema = new mongoose.Schema({
    firstName: String,
    userName: String,
    fullName: String,
    yearOfBirth: Number,
    needScope: String,
    needTechnology: String,
    needLanguage: String,
    questioning: String,
    linux: Boolean,
    availableTime: Array,
    contact: String,
    linkedin: String,
    othersContacts: Array,
    observations: String,
},{
    versionKey: false
})

// critical datas: userName, needLanguage, questioning, contact
const blesseds = mongoose.model('blesseds', blessedsSchema)

module.exports = blesseds
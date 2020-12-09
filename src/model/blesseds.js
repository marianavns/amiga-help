const mongoose = require('mongoose')

const blessedsSchema = new mongoose.Schema({
    firstName: String,
    fullName: String,
    yearOfBirth: Number,
    city: String,
    needScope: Array,
    needLanguage: Array,
    needTechnology: Array,
    linux: Boolean,
    availableTime: Array,
    email: String,
    othersContacts: String,
    observations: String,
},{
    versionKey: false
})

const blesseds = mongoose.model('blesseds', blessedsSchema)

module.exports = blesseds
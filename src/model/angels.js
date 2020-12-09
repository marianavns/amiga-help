const mongoose = require('mongoose')

const angelsSchema = new mongoose.Schema({
    firstName: String,
    fullName: String,
    yearOfBirth: Number,
    city: String,
    scope: Array,
    languages: Array,
    technologies: Array,
    linux: Boolean,
    availableTime: Array,
    email: String,
    othersContacts: String,
    observations: String,
},{
    versionKey: false
})

const angels = mongoose.model('angels', angelsSchema)

module.exports = angels


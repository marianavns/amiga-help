require('dotenv-safe').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error'))
db.once('open', function (){
  console.log('DB connection successful!')
})

const index = require('./routes/index.js')
const angels = require('./routes/angelsRoute.js')
const blesseds = require('./routes/blessedsRoute.js')

app.use(bodyParser.json());

app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

app.use('/', index)
app.use('/anjas', angels)
app.use('/precisodeajuda', blesseds)

module.exports = app

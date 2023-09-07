require('dotenv').config('./.env')
const express = require('express')
const cors = require('cors')
const infoRoute = require('./routes/info-route')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/info', infoRoute)
module.exports = app
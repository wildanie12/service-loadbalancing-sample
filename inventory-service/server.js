require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 6000
const serviceName = process.env.APP_SERVICE_NAME || 'default service name #1'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('', require('./routes/router'))

app.listen(port, () => console.log(`${serviceName} listening on port: ${port}`))
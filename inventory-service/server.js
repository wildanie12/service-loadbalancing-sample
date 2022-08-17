require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 6000
const serviceName = process.env.APP_SERVICE_NAME || 'default service name #1'


app.use('/', require('./routes/router'))

app.listen(port, () => console.log(`${serviceName} listening on port: ${port}`))
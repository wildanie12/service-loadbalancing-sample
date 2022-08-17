require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 5000
const appName = process.env.APP_NAME || 'Service #1'

app.get('/', (req, res) => {
    const random = Math.floor(Math.random() * 10)
    return res.json({
        service_id: appName,
        status: 'success',
        code: 200,
        message: `Your random number is : ${random}`,
        data: {
            random_number: random
        }
    })
})

app.listen(port, () => console.log(`${appName} listening on port: ${port}`))
const express = require('express')
const router = express.Router()


router.get('/fruits/', (req, res) => {
    res.send('List of fruits')
})

router.get('/fruits/:fruitID', (req, res) => {
    res.send('Detail fruit')
})

router.post('/fruits/', (req, res) => {
    res.send('Create fruits')
})

router.put('/fruits/:fruidID', (req, res) => {
    res.send('Update fruit')
})

router.delete('/fruits/:fruidID', (req, res) => {
    res.send('Delete fruit')
})

module.exports = router
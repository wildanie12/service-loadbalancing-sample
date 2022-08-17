const express = require('express')
const router = express.Router()
const FruitController = require('../controllers/fruit.controller')

const fruitController = new FruitController()

router.get('/fruits/', fruitController.index)
router.get('/fruits/:fruitID', fruitController.show)
router.post('/fruits/', fruitController.store)
router.put('/fruits/:fruitID', fruitController.update)
router.delete('/fruits/:fruitID', fruitController.delete)

module.exports = router
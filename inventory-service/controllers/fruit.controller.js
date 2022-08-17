require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

class FruitController {

    constructor() {
        this.serviceName = process.env.APP_SERVICE_NAME || 'default service name #1'
        this.fruits = [
            {
                id: 'FR-1',
                name: 'Banana',
                stock: 81,
                color: 'Yellow'
            },
            {
                id: 'FR-2',
                name: 'Apple',
                stock: 77,
                color: 'Red'
            },
            {
                id: 'FR-3',
                name: 'Avocado',
                stock: 61,
                color: 'Green'
            }
        ]
    }

    index = (req, res) => {
        return res.json({
            service: this.serviceName,
            status: 'success',
            code: 200,
            data: this.fruits,
            message: `This is served from ${this.serviceName}`
        })
    }

    show = (req, res) => {
        const id = req.params.fruitID
        const fruitIndex = this.fruits.findIndex(item => item.id === id)
        if (fruitIndex < 0) {
            return res.status(400).json({
                service: this.serviceName,
                status: 'not found',
                code: 400,
                data: null,
                message: `This is served from ${this.serviceName}`
            })
        }
        return res.json({
            service: this.serviceName,
            status: 'success',
            code: 200,
            data: this.fruits[fruitIndex],
            message: `This is served from ${this.serviceName}`
        })
    }

    store = (req, res) => {
        const { name, stock, color } = req.body
        const fruit = { id: uuidv4(), name, stock, color }
        this.fruits.push(fruit)

        return res.json({
            service: this.serviceName,
            status: 'success',
            code: 200,
            data: fruit,
            message: `This is served from ${this.serviceName}`
        })
    }

    update = (req, res) => {
        const id = req.params.fruitID
        const fruitIndex = this.fruits.findIndex(item => item.id === id)
        if (fruitIndex < 0) {
            return res.status(400).json({
                service: this.serviceName,
                status: 'not found',
                code: 400,
                data: null,
                message: `This is served from ${this.serviceName}`
            })
        }

        const { name, stock, color } = req.body
        const fruit = { id, name, stock, color }
        this.fruits[fruitIndex] = fruit

        return res.json({
            service: this.serviceName,
            status: 'success',
            code: 200,
            data: this.fruits[fruitIndex],
            message: `This is served from ${this.serviceName}`
        })
    }

    delete = (req, res) => {
        const id = req.params.fruitID
        const fruitIndex = this.fruits.findIndex(item => item.id === id)
        if (fruitIndex < 0) {
            return res.status(400).json({
                service: this.serviceName,
                status: 'not found',
                code: 400,
                data: null,
                message: `This is served from ${this.serviceName}`
            })
        }

        this.fruits.splice(fruitIndex, 1)
         return res.json({
            service: this.serviceName,
            status: 'success',
            code: 200,
            data: id,
            message: `This is served from ${this.serviceName}`
        })
    }

}

module.exports = FruitController
const express =require('express')
const Router = express.Router()
const carController = require('../controllers/carController')

Router.post('/carRegister',carController.createCar)
Router.get('/getCars',carController.getCar)

module.exports = Router
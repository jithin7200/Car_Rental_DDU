const express =require('express')
const Router = express.Router()
const carController = require('../controllers/carController')
const authMIddleware = require('../middlewares/middleWare')

Router.post('/carRegister',authMIddleware,carController.createCar)
Router.get('/getCars',carController.getCar)

module.exports = Router
const express =require('express')
const Router = express.Router()
const carController = require('../controllers/carController')
const authMIddleware = require('../middlewares/middleWare')
const adminMiddleware =  require('../middlewares/adminMiddleware')

Router.post('/carRegister',authMIddleware,adminMiddleware,carController.createCar)
Router.get('/getCars',carController.getCar)
Router.put('/updatedpost/:id',carController.updatPost)
Router.delete('/deletepost/:id',carController.deletePost)

module.exports = Router
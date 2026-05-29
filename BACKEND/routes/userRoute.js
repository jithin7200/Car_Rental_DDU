const express = require('express')
const Router = express.Router()
const userController = require('../controllers/userController')

Router.post('/userRegister',userController.userRegister)
Router.post('/userLogin',userController.userLogin)
Router.put('/getUser',userController.getUser)

module.exports = Router
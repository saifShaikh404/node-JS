let express = require('express')
let userController = require('../controller/Users.js')
let router = express.Router()

router.post('/user', userController.signUp)
    .post('/login', userController.login)
    .get('/user', userController.getUsers)
    .get('/user/:id', userController.getUsersById)

exports.users = router
let express = require('express')
let userController = require('../controller/Users.js')
let router = express.Router()

router.post('/user', userController.createUser)
    .get('/user', userController.getUsers)
    .get('/user/:id', userController.getUserById)
    .put('/user/:id', userController.replaceUser)
    .patch('/user/:id',userController.updateUser)
    .delete('/user/:id', userController.deleteUser)

exports.users = router
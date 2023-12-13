let express = require('express')
let productRoute = require('./routes/productRoutes')
let userRoute = require('./routes/userRoutes')
let server = express()

server.use(express.json())
server.use(express.static('public'))
server.use('/', productRoute.products)
server.use('/', userRoute.users)


server.listen(8080)
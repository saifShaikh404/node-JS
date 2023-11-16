let express = require('express')
let productRoute = require('./routes/productRoutes')
let userRoute = require('./routes/userRoutes')
// let productController = require('./controller/Products')
let server = express()

server.use(express.json())
server.use('/', productRoute.products)
server.use('/', userRoute.users)

// server.post('/products', productController.createProduct)
//     .get('/products', productController.getProducts)
//     .get('/products/:id', productController.getProductById)
//     .put('/products/:id', productController.replaceProduct)
//     .patch('/products/:id',productController.updateProduct)
//     .delete('/products/:id', productController.deleteProduct)

server.listen(8080)
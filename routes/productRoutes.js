let express = require('express')
let productController = require('../controller/Products.js')
let router = express.Router()

router.post('/products', productController.createProduct)
    .get('/products', productController.getProducts)
    .get('/products/:id', productController.getProductById)
    .put('/products/:id', productController.replaceProduct)
    .patch('/products/:id',productController.updateProduct)
    .delete('/products/:id', productController.deleteProduct)

exports.products = router
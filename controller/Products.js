let fs = require('fs')
// let dataProds = JSON.parse(fs.readFileSync('./data.json','utf-8'))
// let data = dataProds.prods

let Products = require('../model/ProductModel.js')

exports.createProduct = async (req, res) => {
    let newData = await req.body
    console.log(newData)
    let addProd = new Products.products(newData)
    await addProd.save()
    res.json(addProd)
}

exports.getProducts = async (req, res) => {
    let productsData = await Products.products.find()
    res.json(productsData)
}

exports.getProductById = async (req, res) => {
    let id = req.params.id;
    let productsData = await Products.products.findById(id)
    res.json(productsData)
}

exports.replaceProduct = async (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let prods = await Products.products.replaceOne({_id:id}, dataToUpdate)
    res.json(prods)
}

exports.updateProduct = async (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let prods = await Products.products.replaceOne({_id:id}, dataToUpdate)
    res.json(prods)
}

exports.deleteProduct = async (req, res) => {
    let id = req.params.id
    let delData = await Products.products.deleteOne({_id: id})
    res.json(delData)
}
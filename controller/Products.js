let fs = require('fs')
let Products = require('../model/ProductModel.js')


exports.createProduct = async (req, res) => {
    let newData = await req.body
    console.log(newData)
    let addProd = new Products.datas(newData)
    await addProd.save()
    res.json(addProd)
}

exports.getProducts = async (req, res) => {
    let productsData = await Products.datas.find({})
    res.json(productsData)
}

exports.getProductById = async (req, res) => {
    let id = req.params.id;
    let productsData = await Products.datas.findById(id)
    res.json(productsData)
}

exports.replaceProduct = async (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let prods = await Products.datas.replaceOne({_id:id}, dataToUpdate)
    res.json(prods)
}

exports.updateProduct = async (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let prods = await Products.datas.replaceOne({_id:id}, dataToUpdate)
    res.json(prods)
}

exports.deleteProduct = async (req, res) => {
    let id = req.params.id
    let delData = await Products.datas.deleteOne({_id: id})
    res.json(delData)
}
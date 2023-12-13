let fs = require('fs')
const ejs = require('ejs');
const path = require('path')

let Products = require('../model/ProductModel.js')

// ejs routes starts
exports.getSSR = async (req, res) => {
    let productsData = await Products.datas.find({})
    ejs.renderFile(path.resolve(__dirname,"../ssr/index.ejs"),{datas: productsData}, function(err, str){
        res.send(str)
    });
}

exports.getaddForm = async (req, res) => {
    ejs.renderFile(path.resolve(__dirname,"../ssr/add.ejs"), function(err, str){
        res.send(str)
    });
}

exports.addProduct = async (req, res) => {
    let newData = await req.body
    console.log(newData)
    let addProd = new Products.datas(newData)
    await addProd.save()
    res.sendStatus(200)
}

// ejs routes ends


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
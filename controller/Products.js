let fs = require('fs')
let dataProds = JSON.parse(fs.readFileSync('./data.json','utf-8'))
let data = dataProds.prods

exports.createProduct = (req, res) => {
    let newData = req.body
    data.push(newData)
    res.sendStatus(201)
}

exports.getProducts = (req, res) => {
    res.json(data)
}

exports.getProductById = (req, res) => {
    console.log(req.params)
    let id = +req.params.id;
    let singleProd = data.find((data) => data.id === id)
    res.json(singleProd)
}

exports.replaceProduct = (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...dataToUpdate})
    res.sendStatus(201)
}

exports.updateProduct = (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getData = data.find((data) => data.id === +id)
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...getData, ...dataToUpdate})
    res.sendStatus(201)
}

exports.deleteProduct = (req, res) => {
    let id = req.params.id
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1)
    res.sendStatus(201)
}
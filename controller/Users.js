let fs = require('fs')
let dataUsers = JSON.parse(fs.readFileSync('./data.json','utf-8'))
let data = dataUsers.user

exports.createUser = (req, res) => {
    let newData = req.body
    data.push(newData)
    res.sendStatus(201)
}

exports.getUsers = (req, res) => {
    res.json(data)
}

exports.getUserById = (req, res) => {
    console.log(req.params)
    let id = +req.params.id;
    let singleUser = data.find((data) => data.id === id)
    res.json(singleUser)
}

exports.replaceUser = (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...dataToUpdate})
    res.sendStatus(201)
}

exports.updateUser = (req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getData = data.find((data) => data.id === +id)
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...getData, ...dataToUpdate})
    res.sendStatus(201)
}

exports.deleteUser = (req, res) => {
    let id = req.params.id
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1)
    res.sendStatus(201)
}
let express = require('express')
let fs = require('fs')

let data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
let server = express()


server.use(express.json())

// CRUD Operation - Create, Read, Update, Delete

// CREATE - create data
server.post('/products',(req, res) => {
    let newData = req.body
    data.push(newData)
    res.sendStatus(201)
})

// READ - read the data
server.get('/products',(req, res) => {
    res.json(data)
})

server.get('/products/:id', (req, res) => {
    console.log(req.params)
    let id = +req.params.id;
    let singleProd = data.find((data) => data.id === id)
    res.json(singleProd)
})

// UPDATE - updates the data

server.put('/products/:id',(req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...dataToUpdate})
    res.sendStatus(201)
})

server.patch('/products/:id',(req, res) => {
    let id = req.params.id
    let dataToUpdate = req.body
    let getData = data.find((data) => data.id === +id)
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1, {id, ...getData, ...dataToUpdate})
    res.sendStatus(201)
})

// DELETE - deletes data
server.delete('/products/:id',(req, res) => {
    let id = req.params.id
    let getDataIndex = data.findIndex((data) => data.id === +id)

    data.splice(getDataIndex, 1)
    res.sendStatus(201)
})



server.listen(8080)
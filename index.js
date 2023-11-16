let express = require('express')
let fs = require('fs')

let data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
let server = express()

// 1). basic server
// server.get('/',(req, res) => {
    // res.send('Hello')
    // res.send('<h1>Hello</h1>')
    // res.sendFile('D:/Programming/Node Js/ch3 express/index.html') // not preferred

    // sending status
    // res.sendStatus(404)
    // res.status(201).send("Hello") // not preferred

    // res.json(data)

// })


// 2). Middelware

// Inbuilt middleware express
// type 1: Inbuilt middleware reads json data in body
server.use(express.json())
// type 2: used when data sent in form
// server.use(express.urlencoded())
// type 3: static hosting
// server.use(express.static('public'))

// Application level middleware
server.use((req, res, next) => {
    console.log(req.ip, req.method, req.hostname, new Date, req.get("User-agent"))
    next()
})

const auth = ((req, res, next) => {
    console.log(req.query)
    if(req.query.password == "123") {
        next()
    } else {
        res.sendStatus(401)
    }
})
// this is also app level middleware but we can set this on certain route as well
// server.use(auth)

const authBody = ((req, res, next) => {
    console.log(req.body)
    if(req.body.password == "123") {
        next()
    } else {
        res.sendStatus(401)
    }
})

server.get('/prods/:id',(req,res) => {
    console.log(req.params) // getting parameter from url
    res.json("products")
})

server.get('/',auth,(req,res) => {
    res.json({type: "GET"})
})

server.post('/',authBody,(req,res) => {
    res.json({type: "POST"})
})

server.put('/',(req,res) => {
    res.json({type: "PUT"})
})

server.delete('/',(req,res) => {
    res.json({type: "DELETE"})
})

server.patch('/',(req,res) => {
    res.json({type: "PATCH"})
})

server.listen(8080)
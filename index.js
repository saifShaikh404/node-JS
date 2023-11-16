// 1). Basic server setup
// let http = require('http')
// let server = http.createServer((req, res) => {
//     res.end("<h1>Hello</h1>")
// })
// server.listen(8080)

// 2). headers
// let http = require('http')
// let someData = { name: "Saif"};
// let server = http.createServer((req, res) => {
    // res.setHeader('Content-Type','text/html')
    // res.end("Hello")

    // res.setHeader('Content-Type','application/json')
    // res.end(JSON.stringify(someData))
// })
// server.listen(8080)

// 3). Sending html file and url and SSR
let http = require('http')
let fs = require('fs')
let html = fs.readFileSync('./index.html','utf-8')
let data = fs.readFileSync('./data.json','utf-8')

let server = http.createServer((req, res) => {
    let requestUrl = req.url.split('/')
    let originalData = JSON.parse(data)
    if(requestUrl[1] == 'demo'){
        res.setHeader('Content-Type','text/html')
        res.end("<h1>Demo</h1>")
    } 
    else if(requestUrl[1] == 'product') {
        let dataToSend = originalData.find((data) => data.id == requestUrl[2])
        if(dataToSend) {
            console.log(dataToSend)
            let newHTML = html
            let modifiedHTML = newHTML.replace("**title**",dataToSend.name)
            .replace("**desc**",dataToSend.desc)
            res.setHeader('Content-Type','text/html')
            res.end(modifiedHTML)
        } else {
            res.setHeader('Content-Type','text/html')
            res.end("No Data Found")
        }   
    } 
    else {
        res.setHeader('Content-Type','text/html')
        res.end(html)
    }
})
server.listen(8080)

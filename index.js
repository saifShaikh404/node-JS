const express = require('express');
const server = express();
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const mongoose = require('mongoose');
const env = require('dotenv');


env.config();

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected")
}

server.use(express.json())
server.use(express.urlencoded())

server.use(express.static('public'))
server.use('/', productRoute.products)
server.use('/', userRoute.users)


server.listen(8080)
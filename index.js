const express = require('express');
const server = express();
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const mongoose = require('mongoose');
const env = require('dotenv');
const jwt = require('jsonwebtoken')


env.config();

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected")
}

let auth = (req, res, next) => {
  let token = req.get('Authorization').split('Bearer ')[1];
  console.log(token)
  try{
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded)
    if(decoded.email){
      next();
    }
  }catch(err){
    res.sendStatus(401)
  }
}

server.use(express.json())
server.use(express.urlencoded())

server.use(express.static('public'))
server.use('/', userRoute.users)
server.use('/', auth, productRoute.products)


server.listen(8080)
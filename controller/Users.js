let fs = require('fs')
let jwt = require('jsonwebtoken')
let env = require('dotenv')
let Users = require('../model/UserModel.js')
let bcrypt = require('bcrypt')
env.config()

exports.signUp = async (req, res) => {
    let newData = await req.body
    let token = jwt.sign({email: req.body.email}, process.env.SECRET_KEY)

    let addUser = new Users.users(newData)
    const hash = bcrypt.hashSync(req.body.password, 10);
    addUser.token = token
    addUser.password = hash
    await addUser.save()
    res.json(addUser)
}

exports.login = async (req, res) => {
    let token = jwt.sign({email: req.body.email}, process.env.SECRET_KEY)
    let chkUser = await Users.users.findOne({email: req.body.email})
    console.log(chkUser)
    let verify = bcrypt.compareSync(req.body.password, chkUser.password); 

    if(verify){
        chkUser.token = token
        await chkUser.save()
        res.json(token)
    }else{
        res.sendStatus(401)
    }

}

exports.getUsers = async (req, res) => {
    let userData = await Users.users.find({})
    res.json(userData)
}

exports.getUsersById = async (req, res) => {
    let id = req.params.id;
    let userData = await Users.users.findById(id)
    res.json(userData)
}

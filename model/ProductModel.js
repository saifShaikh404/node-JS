// Database Import
const mongoose = require('mongoose');

// Schema
const { Schema } = mongoose;
const dataSchema = new Schema({
    name: {type:String},
    desc: String,
    date : Date
});

exports.datas = mongoose.model('datas', dataSchema);
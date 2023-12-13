// Database Import
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecom');
  console.log("Database Connected")
}

// Schema
const { Schema } = mongoose;
const productSchema = new Schema({
    name: {type:String},
    desc: String,
    price : {type:Number, min: [0, "Atleast put some Number"]},
    images: [String]
});

exports.products = mongoose.model('products', productSchema);
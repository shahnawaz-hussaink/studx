const mongoose = require('mongoose')

const featuredProduct = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String
});

module.exports = mongoose.model("FeaturedProduct",featuredProduct);
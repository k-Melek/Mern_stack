const mongoose = require ("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true, "Title is Required ❌❌❌"],
        minLength:[3, "Title must be greater than 3 characters"]
    },
    price: {
        type:Number,
        required:[true, "Price is Required ❌❌❌"],
        min:1,
        max:9999
    },
    description: {
        type:String,
        required:[true, "Description is Required ❌❌❌"],
        minLength:[9,"Description must be greater than 9 characters"]
    }
},{timestamps:true})


const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
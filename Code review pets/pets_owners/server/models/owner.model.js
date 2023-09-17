const mongoose = require('mongoose')
const { PetSchema } = require('./pet.model')

const OwnerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} must be at least 3"]
    },
    lastName: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} must be at least 3"]
    },
    phone: {
        type: Number,
        required: [true, "{PATH} is Required"]
    },
    owner_pets: [PetSchema]

}, { timestamps: true })
const Owner = mongoose.model("owner", OwnerSchema)
module.exports = Owner
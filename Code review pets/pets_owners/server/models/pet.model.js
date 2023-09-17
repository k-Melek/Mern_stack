const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} must be at least 3"]
    },
    specie: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} must be at least 3"]
    },
    breed: {
        type: String,
        required: [true, "{PATH} is Required"],
        minlength: [3, "{PATH} must be at least 3"]
    },

}, { timestamps: true })
const Pet = mongoose.model("pet", PetSchema)
module.exports = { Pet, PetSchema }
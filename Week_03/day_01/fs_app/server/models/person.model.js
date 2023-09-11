const mongoose = require ("mongoose")


const PersonSchema = new mongoose.Schema( {
    firstName: {
        type:String,
        required:[true, "First Name is Required ❌❌❌"],
        minLength:[3, "First Name must be greated than 3 characters"]
    },
    lastName: {
        type:String,
        required:[true, "Last Name is Required ❌❌❌"],
        minLength:[3, "Last Name must be greated than 3 characters"]
    },
    age: {
        type:Number,
        required:[true, "Age is Required ❌❌❌"],
        minLength:[3, "Age must be greated than 3 characters"],
        min:1,
        max:120
    },
    isFunny: {
        type:Boolean,
        default:false
    },
},{timestamps:true})

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person
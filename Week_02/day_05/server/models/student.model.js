// Bringing Mongoose Package
const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    age : Number,
    isGraduated : Boolean,
    hobbies : Array
})

const Student = mongoose.model('Student', StudentSchema )

module.exports = Student;

//! ===> Go to Controllers  
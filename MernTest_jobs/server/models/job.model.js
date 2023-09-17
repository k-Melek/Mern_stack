const mongoose  = require('mongoose')

const JobSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Job Title is required ❌❌❌"],
        minlength:[3, "Title must be at least 3 characters ⛔⛔⛔"]
    },
    company:{
        type:String,
        required:[true, "company is required ❌❌❌"],
        minlength:[3, "company must be at least 3 characters ⛔⛔⛔"]
    },
    remote : {
        type:Boolean,
        default:false
    },
    salary:{
        type:Number,
        required:[true, "Salary is required ❌❌❌"],
        min:[70000, "Salary must be above 70k ⛔⛔⛔"]
    },
    status:{
        type:String,
        default: "pending"
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{timestamps:true})


// const Job = mongoose.model('Job', JobSchema);

// module.exports = Job;

module.exports = mongoose.model('Job', JobSchema);






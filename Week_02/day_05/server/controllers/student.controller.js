
const StudentModel = require('../models/student.model')
const studentsRoutes = require('../routes/students.routes')


//FIND ALL STUDENTS
module.exports.findAllSudents = (req,res) => {
    StudentModel.find()
                .then(result => {
                    res.status(200).json(result)
                    console.log(result,"✅✅✅")
                }
                    )
                .catch(error => res.status(400).json(error))
}

//FIND ONE STUDENT
module.exports.findAOneSudent = (req,res) => {
    console.log(req.params);
    StudentModel.findById({_id:req.params.id})
                .then(result => {
                    res.status(200).json(result)
                    console.log(result,"✅✅✅")
                }
                    )
                .catch(error => res.status(400).json(error))
}

// CREATE STUDENT
module.exports.createStudent = (req,res) => {
    console.log(req.body);
    StudentModel.create(req.body)
                .then(createResult =>{
                    res.status(201).json(createResult)
                    console.log(createResult);
                })
                .catch(error => res.status(400).json(error))
}

// UPDATE STUDENT

module.exports.updateStudent = (req, res) => {
    StudentModel.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
}

// DELETE STUDENT

module.exports.deleteStudent = (req, res) => {
    StudentModel.deleteOne(
        {_id:req.params.id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
}


//! ===> GO to server.JS
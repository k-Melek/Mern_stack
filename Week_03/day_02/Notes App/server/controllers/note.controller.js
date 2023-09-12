
const Note = require('../models/note.model')

module.exports = {
    findAll : (req, res) => {
        Note.find()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },

    findOne : (req, res) => {
        Note.findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },

    create : (req, res) => {
        Note.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json(error))
    },

    update : (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },

    delete : (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    }
}
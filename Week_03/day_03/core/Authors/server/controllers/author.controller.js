const Author = require('../models/author.model')


module.exports = {
    findAll : (req, res) => {
        Author.find()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },
    
    findOne : (req, res) => {
        Author.findById(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },

    create : (req, res) => {
        Author.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json(error.errors))
    },

    update : (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error.errors))
    },

    delete : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    }
}
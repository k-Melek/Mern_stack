const Person = require('../models/person.model');

module.exports = {

    findAllPeople:(req, res) => {
        Person.find()
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },
    findOnePerson:(req, res) => {
        Person.findOne({_id:req.params.id})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },
    createPerson:(req, res) => {
        Person.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json(error))
    },
    updatePerson:(req, res) => {
        Person.findOneAndUpdate({_id:req.params.id}, req.body,{new:true, runValidators:true})
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error))
    },
    deletePerson:(req, res) => {
        Person.deleteOne({_id:req.params.id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
    }
}
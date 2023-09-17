const { Pet } = require('../models/pet.model')

module.exports = {
    //Display
    findAll: (req, res) => {
        Pet.find()
            .then(pets => res.status(200).json(pets))
            .catch(err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then(pet => res.status(200).json(pet))
            .catch(err => res.status(400).json(err))
    },
    //Actions
    create: (req, res) => {
        Pet.create(req.body)
            .then(pets => res.status(201).json(pets))
            .catch(err => res.status(400).json(err))
    },
    edit: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(editedPet => res.status(201).json(editedPet))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Pet.findByIdAndRemove(req.params.id)
            .then(deletedPets => res.status(200).json(deletedPets))
            .catch(err => res.status(400).json(err))
    },
}
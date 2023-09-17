const Owner = require('../models/owner.model')
const { Pet } = require('../models/pet.model')

module.exports = {
    //Display
    findAll: (req, res) => {
        Owner.find()
            .then(owners => res.status(200).json(owners))
            .catch(err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Owner.findOne({ _id: req.params.id })
            .then(owner => res.status(200).json(owner))
            .catch(err => res.status(400).json(err))
    },
    //Actions
    create: (req, res) => {
        Owner.create(req.body)
            .then(owner => res.status(201).json(owner))
            .catch(err => res.status(400).json(err))
    },
    edit: (req, res) => {
        Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(editedOw => res.status(201).json(editedOw))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Owner.findByIdAndRemove(req.params.id)
            .then(deletedOw => res.status(200).json(deletedOw))
            .catch(err => res.status(400).json(err))
    },
    addPet: async (req, res) => {
        Pet.findById(req.body.pet_id)
            .then(pet => {
                if (!pet) {
                    return res.status(404).json({ error: 'Pet not found' });
                }
                console.log(pet);
                Owner.findByIdAndUpdate(req.params.id, { $push: { owner_pets: pet } }, { new: true })
                    .then(owner => {
                        // console.log("ADOPTER------", owner);
                        res.json(owner)
                    }).catch(err => console.log(err))

            }).catch(err => console.error(err))
    }
}
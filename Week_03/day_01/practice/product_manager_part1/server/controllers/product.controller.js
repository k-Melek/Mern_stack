const Product = require('../models/product.model')

module.exports = {
    //- ALL CRUD FOR PRODUCT HERE 
    findAllProducts: (req, res) => {
        Product.find()
                .then(response => res.status(200).json(response))
                .catch(error => res.status(400).json(error))
    },
    findOneProduct: (req, res) => {
        Product.findById({_id:req.params.id})
                .then(response => res.status(200).json(response))
                .catch(error => res.status(400).json(error))
    },
    createProduct: (req, res) => {
        Product.create(req.body)
                .then(response => res.status(200).json(response))
                .catch(error => res.status(400).json(error))
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
                .then(response => res.status(200).json(response))
                .catch(error => res.status(400).json(error))
    },
    deleteProduct:(req, res) => {
        Product.deleteOne({_id:req.params.id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
    }
}
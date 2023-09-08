const JokeModel = require ('../models/joke.model')


// ALL JOKES
module.exports.findAllJokes = (req, res) => {
    JokeModel.find()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => res.status(400).json(error))
}

// GET ONE JOKE
module.exports.findOneJoke = (req, res) => {
    JokeModel.findById({_id : req.params.id})
                .then(result => {
                    res.status(200).json(result)
                    console.log(result,"✅✅✅");
                })
                .catch(error => res.status(400).json(error))
}

// Create JOKE
module.exports.createJoke = (req, res) => {
    JokeModel.create(req.body)
                .then( createResult => {
                    res.status(201).json(createResult)
                    console.log(createResult);
                })
                .catch(error => res.status(400).json(error))
}

// Update Joke 
module.exports.UpdateJoke = (req, res) => {
    JokeModel.findOneAndUpdate(
                            {_id:req.params.id},
                            req.body,
                            {new:true})
                .then(result => res.status(200).json(result))
                .catch(error => res.status(400).json(error))
}

// DELETE joke
module.exports.deleteJoke = (req, res) => {
    JokeModel.deleteOne({_id:req.params.id})
                .then(result => res.status(200).json(result))
                .catch(error => res.status(400).json(error))
}
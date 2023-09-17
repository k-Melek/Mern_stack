const { findAll, findOne, create, edit, destroy } = require('../controllers/pet.controller')
module.exports = app => {
    app.get('/api/pets', findAll)
    app.post('/api/pets', create)
    app.get('/api/pets/:id', findOne)
    app.put('/api/pets/:id', edit)
    app.delete('/api/pets/:id', destroy)
}
const Owner = require('../controllers/owner.controller')
module.exports = app => {
    app.get('/api/owners', Owner.findAll)
    app.post('/api/owners', Owner.create)
    app.get('/api/owners/:id', Owner.findOne)
    app.put('/api/owners/:id', Owner.edit)
    app.put('/api/owners/:id/addpet', Owner.addPet)
    app.delete('/api/owners/:id', Owner.destroy)
}
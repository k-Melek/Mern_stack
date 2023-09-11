
const personController = require('../controllers/person.controller')

module.exports = app => {
    app.get('/api/people', personController.findAllPeople),
    app.post('/api/people', personController.createPerson),
    app.get('/api/people/:id', personController.findOnePerson),
    app.put('/api/people/:id', personController.updatePerson),
    app.delete('/api/people/:id', personController.deletePerson)
}
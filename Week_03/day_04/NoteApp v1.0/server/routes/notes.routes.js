const noteController = require('../controllers/note.controller')

const authenticate = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/notes', authenticate, noteController.findAll)
    app.get('/api/notes/:id', authenticate, noteController.findOne)
    app.post('/api/notes', authenticate, noteController.create)
    app.put('/api/notes/:id', authenticate, noteController.update)
    app.delete('/api/notes/:id', authenticate, noteController.delete)
}
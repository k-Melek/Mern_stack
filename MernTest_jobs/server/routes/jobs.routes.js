const jobController = require('../controllers/job.controller')

const authenticate = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/jobs', authenticate, jobController.findAll)
    app.get('/api/jobs/:id', authenticate, jobController.findOne)
    app.post('/api/jobs', authenticate, jobController.createJob)
    app.put('/api/jobs/:id', authenticate, jobController.update)
    app.delete('/api/jobs/:id', authenticate, jobController.delete)
}
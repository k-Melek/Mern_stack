
const jokesController = require('../controllers/joke.controller')


module.exports = (app) => {
    
    app.get("/api/jokes", jokesController.findAllJokes ),
    app.get("/api/jokes/:id",jokesController.findOneJoke),
    app.post("/api/jokes",jokesController.createJoke ),
    app.put("/api/jokes/:id",jokesController.UpdateJoke),
    app.delete("/api/jokes/:id",jokesController.deleteJoke)
};

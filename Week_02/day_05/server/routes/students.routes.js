const studentController = require('../controllers/student.controller')

module.exports = (app) => {
    
    app.get("/api/students", studentController.findAllSudents ),
    app.post("/api/students",studentController.createStudent ),
    app.get("/api/students/:id",studentController.findAOneSudent),
    app.put("/api/students/:id",studentController.updateStudent),
    app.delete("/api/students/:id",studentController.deleteStudent)
};




//! ===> Go to Server.js 

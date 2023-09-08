// Bring EXPRESS

const express = require("express");

// Invoke EXPRESS (execute the function express) Save it to variable APP!

const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require('./config/mongoose.config')



//! IMPORT ALL ROUTES 


const studentRoutes = require('./routes/students.routes')
studentRoutes(app)


// DEFINE PORT AS GLOBAL VARIABLE

const PORT = 3000

// RUN the sever 

app.listen(3000, () => {
    console.log(`Server ready on port ${PORT}`);
})
// Bring EXPRESS

const express = require("express");

// Invoke EXPRESS (execute the function express) Save it to variable APP!

const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );





// DEFINE PORT AS GLOBAL VARIABLE

const PORT = 3000


//! IMPORT ALL ROUTES 

// const routes =require('./routes/routes')
// console.log(routes);
// routes(app)

require('./routes/routes')(app)

// RUN the sever 

app.listen(3000, () => {
    console.log(`Server ready on port ${PORT}`);
})
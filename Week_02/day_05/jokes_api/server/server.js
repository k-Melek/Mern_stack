const express = require("express");

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require('./config/mongoose.config')




// DEFINE PORT AS GLOBAL VARIABLE

const PORT = 8000

// RUN the sever 

app.listen(8000, () => {
    console.log(`Server ready on port ${PORT}`);
})
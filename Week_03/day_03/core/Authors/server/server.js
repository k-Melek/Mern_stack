const express = require("express");
const app = express()
const cors = require('cors')


// Global Variable
const PORT = 8000;
const DB = "authors_db"

app.use(  express.json(), express.urlencoded({ extended: true }) , cors());


require('./config/mongoose.config')(DB)


//! Routes 

const personRoutes = require('./routes/author.routes')
personRoutes(app);

//! Routes 


app.listen(PORT , () => console.log(`🚀🚀🚀 >>> Server is Runnign on PORT :${PORT}`))
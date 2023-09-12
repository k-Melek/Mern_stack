const express = require("express");
const app = express()
const cors = require('cors')

// Global Variable
const PORT = 8000;
const DB = "products_db"

app.use(  express.json(), express.urlencoded({ extended: true }) , cors());

//! Link DataBase

require('./config/mongoose.config')(DB)

//! Link DataBase

//! Routes 

require('./routes/product.routes')(app)

//! Routes 


app.listen(PORT , () => console.log(` )-)==>>> Server is Runnign on PORT :${PORT}`))
const express = require("express");
const cors = require('cors')
const app = express();


// GLOBAL VARIABLES
const PORT = process.env.PORT;
const DB = process.env.DB;



app.use(
    express.json(), express.urlencoded({ extended: true }), 
    cors()
    );


require('./config/mongoose.config')(DB)

// require('./routes/jobs.routes')(app)
// require('./routes/user.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))

const express = require('express')
const cors = require('cors')
const app = express()
const DB = "pet_owner_db"

app.use(cors(), express.json(), express.urlencoded({ extended: true }))
require("./config/mongoose.config")(DB)
require("./routes/pet.routes")(app)
require("./routes/owner.routes")(app)


app.listen(8000, () => console.log(`Server is running in port 8000`))

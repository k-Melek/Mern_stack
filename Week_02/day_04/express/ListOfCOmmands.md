1- touch server.js
2- npm init -y
3- npm i express
4- touch .gitignore (add node-modules to gitignore)
5- go to server.js
6- paste the express boilerPlate
```
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
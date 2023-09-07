
// Bring the Package Express
const express = require("express");
// console.log(express);

// Invoe the function Express
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/", (requestObject, responseObject) => {
  console.log(requestObject);
  responseObject.send("Hello from Server.JS 🎈🎈🎈")
} )

const myCallBackFunction =  (req, res) => {
  res.send("Hi from CALLBack FUnction 🔥🔥🔥")
}

app.get("/callback",myCallBackFunction)

app.get("/api/json", (req, res) => {
  res.json({message:"Hello From JSON", status:"Ok", code:200})
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

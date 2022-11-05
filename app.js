require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.APP_PORT ?? 5000;
app.use(express.json()); 


const welcome = (req, res) => {
  res.send("Welcome to my favourite user list");
};

app.get("/", welcome);

const userHandler = require("./userHandler");

app.get("/api/users", userHandler.getUsers);
app.get("/api/users/:id", userHandler.getUsersById);
app.post("/api/users", userHandler.postUser);
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

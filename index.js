// EXPRESS:  https://expressjs.com/
// Basic usage: https://expressjs.com/en/starter/hello-world.html
// MORGAN MIDDLEWARE : https://github.com/expressjs/morgan

//DEPENDENCIES
//npm i morgan
//npm i express
//npm i -g nodemon      <-- will automatically refresh servers when making updates to project

//HOW TO START: nodemon index.js

//SECTION 40 & 41:
const express = require("express");
const app = express();

const AppError = require("./src/appError");

const morgan = require("morgan");
app.use(morgan("tiny")); //use morgan middleware on every request

//MIDDLEWARE
//===========
app.use((req, res, next) => {
  //Will run during any route request
  console.log("THIS IS A BASIC MIDDLEWARE");
  next();
});

app.use((err, req, res, next) => {
  //ERROR HANDLING MIDDLEWARE
  console.log("*************ERROR****************");
  next(err);
});

const verifyPassword = (req, res, next) => {
  //basic authentication using middleware example
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  throw new AppError("Password required", 401);
};

// ROUTES
//==============
app.get("/", (req, res) => {
  res.send("This is root endpoint.");
});

app.get("/error", (req, res) => {
  throw new Error("password required");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send(
    "MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone"
  );
});

//Each time the 'cats' endpoint is requested:
app.get("/cats", (req, res) => {
  res.send("Get Request - MEOW");
});

app.post("/cats", (req, res) => {
  //Each time the 'cats' endpoint gets posted to
  res.send("Post Request - MEOW!");
});

//----------------PATH PARAMETERS:
//example: localhost:3000/gardens/28329
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Browsing the ${subreddit} subreddit endpoint.`);
});

//-----QUERY STRINGS:
//example: localhost:3000/search?q=cat
app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for: ${q}</h1>`);
});

//------UNKNOWN REQUESTS:
app.get("*", (req, res) => {
  //Get all unknown paths:
  console.log("Unknown Request");
});

//----Listen to port:
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});

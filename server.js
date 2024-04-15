import express from "express";

const app = express();

import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

app.use(express.urlencoded());

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

app.get("/", (req, res) => {
  console.log("server received the request");

  //   res.send("<h1>Info coming from the server<h1>");

  res.sendFile(__dirname + "/public/index.html");
});

app.listen(8000, (error) => {
  error
    ? console.log(error)
    : console.log("Your server is running at http://localhost:8000");
});

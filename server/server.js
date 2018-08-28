const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    error: "Server not found.",
    name: "ToDo App v1.0"
  });
});

app.get("/users", (req, res) => {
  res.status(200).send([
    {
      name: "Serhii",
      age: 22
    },
    {
      name: "Dmitryi",
      age: 22
    },
    {
      name: "Kiriru",
      age: 21
    }
  ]);
});

app.listen(3000);
module.exports.app = app;

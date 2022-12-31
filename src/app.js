const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<p>Hello World</p>");
});

module.exports = app;

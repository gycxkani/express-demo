const express = require("express");
const school = express.Router();

school.get("/index", (req, res) => {
  res.send("school首页");
});

module.exports = school;

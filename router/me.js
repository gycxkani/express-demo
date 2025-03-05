const express = require("express");
const me = express.Router();

me.get("/index", (req, res) => {
  res.send("这是我的首页");
});

module.exports = me;

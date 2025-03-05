const express = require("express");
const app = express();

app.get("/index", (req, res) => {
  // 获取get请求参数
  res.send(req.query);
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

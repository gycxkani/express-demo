const express = require("express");
const app = express();

app.get("/index", (req, res) => {
  throw new Error("报错了");
});

app.use((err, req, res, next) => {
  res.status(500).send("内部服务器错误");
});

app.listen(3000, () => {
  console.log("服务器启动成功：http://localhost:3000");
});

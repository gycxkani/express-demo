const express = require("express");
const fs = require("fs");
const app = express();

app.get("/file", async (req, res, next) => {
  // 捕获错误
  try {
    await fs.readFile("/1.txt");
  } catch (err) {
    next(err);
  }
});
// 错误处理中间件
app.use((err, req, res, next) => {
  // console.log(err);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});

const express = require("express");
const fs = require("fs");
const app = express();

app.get("/file", (req, res, next) => {
  // 读取一个不存在的文件，引发错误
  fs.readFile("/1.txt", (err, data) => {
    if (err) {
      next(err);
    }else{
      console.log(data.toString());
      // next()
    }
  });
});
// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3002, () => {
  console.log("server is running at http://127.0.0.1:3002");
});

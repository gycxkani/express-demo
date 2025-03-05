const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// 拦截所有请求，解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/add", (req, res) => {
  res.send(req.body);// 获取post请求体数据
});

app.listen(3000, () => {
  console.log("服务器启动成功: http://localhost:3000");
});

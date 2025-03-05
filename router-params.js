const express = require("express");
const app = express();
// 路由传参数
app.get("/detail/:id", (req, res) => {
  res.send(req.params);// 获取路由传参
});

app.listen(3000, () => {
  console.log("服务器启动成功: http://localhost:3000");
});

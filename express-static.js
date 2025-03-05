const express = require("express");
const app = express();
const path = require("path");
// 实现静态资源托管
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("服务器启动成功: http://localhost:3000 ");
});

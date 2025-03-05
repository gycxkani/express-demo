const express = require("express");
const app = express();
// 创建路由对象
const admin = express.Router();
// 为路由对象匹配请求路径
app.use("/admin", admin);
// 创建二级路由
admin.get("/about", (req, res) => {
  res.send("这里是后台登录页面");
});
app.listen(3000, () => {
  console.log("服务器启动成功：http://localhost:3000");
});

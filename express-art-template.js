const express = require("express");
const app = express();
const path = require("path");
// 当渲染后缀名为art的模板时，使用express-art-template模板引擎
app.engine("art", require("express-art-template"));
// 设置模板存放的路径
app.set("views", path.join(__dirname, "views"));
// 设置渲染模板时的默认后缀
app.set("view engine", "art");
app.get("/my", (req, res) => {
  // 渲染模板
  res.render("my.art", { msg: "hello world" });
});
// 设置局部变量songName
// 挂载到locals对象上的变量在当前项目所有模板中都可以直接访问
app.locals.songName='《我的名字是龙》'
app.listen(3000, () => {
  console.log("服务已启动：http://localhost:3000");
});

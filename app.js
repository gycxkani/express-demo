const express = require("express");
// 创建服务器应用程序--也就是原来的http.createServer()
const app = express();

// app.use((req, res, next) => {
//   res.send("网站维护中...");
// });

// 接收所有请求
app.use((req, res, next) => {
  console.log("请求路径为：" + req.url);
  next();
});
// 第一个参数是请求路径，代表不论什么请求方式，只要是这个请求地址就接收这个请求
app.use("/about", (req, res, next) => {
  console.log("本帅300年功力岂是你能撼动的");
  next();
});

app.get("/about", function (req, res, next) {
  req.name = "参见大帅"; // 中间件1：添加属性
  next(); // 传递给下一个处理程序
});
app.get("/about", function (req, res) {
  res.send(req.name); // 中间件2：最终响应
});

app.use((req, res, next) => {
  res.status(404);
  res.send("页面不存在");
});

// 相当于server.listen(3000,function(){})
app.listen(3000, function () {
  console.log("应用运行在3000端口");
});

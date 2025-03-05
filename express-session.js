const express = require("express");
// 引入 express-session 模块
const session = require("express-session");
const app = express();
// 设置 express-session 配置
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
// 使用 express-session
app.get("/", (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  }
});

app.listen(3000, () => {
  console.log("服务已启动：http://localhost:3000");
});

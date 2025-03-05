const express = require("express");
const app = express();
// 引入路由
const me = require("./router/me");
const school = require("./router/school");
// 为路由对象匹配请求路径
app.use("/me", me);
app.use("/school", school);

app.listen(3000, () => {
  console.log("服务器启动成功: http://localhost:3000");
});

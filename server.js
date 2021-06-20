//未能正确启动node
var app = require("express")();
//接收来自用户的任何请求
app.use(function (req, res) {
  res.write("The response from server");
  res.end();
});

var ip = "192.168.121.48";
var port = 3000;
//port写端口号，ip写ip地址，
app.listen(port, ip, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.info("服务器起动成功..");
  }
});

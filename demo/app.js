let { init, exec, sql, transaction } = require('mysqls')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql'); 
const userRouter = require('./routes/users')
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users',userRouter) ;
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     port: '3306',
//     password: 'root',     // 改成你自己的密码
//     database: 'kittty'    // 改成你的数据库名称
// });
// init({
//     host: 'localhost',
//     user: 'root',
//     password:'root',
//     database: 'kittty',
//     port: 3306,
// }) 
// connection.connect();
 
// 解决跨域请求问题
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});
//接口方法：   这是我写的登录接口，仅供参考

 
//最后是起服务就ok了,8000是端口号
app.listen(8000
    // , '127.0.0.1', function () {
    // var host = server.address().address;
    // var port = server.address().port;
    // console.log("地址为 http://%s:%s", host, port);}
    )
 module.exports = app;

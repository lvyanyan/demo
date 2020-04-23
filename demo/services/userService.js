/**连接数据库的基本方法 */
const db = require('./../sql/dbConfig');
const mysql = require('mysql'); 
let { init, exec, sql, transaction } = require('mysqls')
var conn = mysql.createConnection(db.mysql);
conn.connect();

/**用户登录 */
exports.login = function (req, res) {   //login是接口地址，你可以随意写
    //此获取参数的方法是get方法，post要先安装body-parser，有需要的可以联系我
    var user_name = req.body.loginForm.username;       // 获取从接口传递的参数，用户名
    var password = req.body.loginForm.password;    // 获取从接口传递的参数，密码
    //写sql查询语句，login是表名，查看是否有此用户
    console.log(req.body.loginForm.username)
    var sqls = sql
                .table('sysUser')
                .where({userName:user_name,userPwd:password})
                .select()
    var sqlParams = [user_name]; 
    //查询
    conn.query(sqls, sqlParams, function (err, result) {
        if (err) {
            res.send(err.message);
            return;
        }
        var obj;
        if(result == ''){
            obj = {
                code: 101,
                mag:"用户不存在",
            }
        }else{
            // 如果查询出来的数据密码和传过来的密码一致，登录成功
            if(result[0].userPwd == password){ 
                obj = {
                    status:0,
                    code:200,
                    mag:"登录成功",
                    data:{
                        'userId':result[0].userId
                    }
                }
            }else{   //否则密码错误
                obj = {
                    code:400,
                    mag:"密码错误",
                }
            }
        }
        res.send(obj);   //把数据返回
    });
}
exports.regist = function (req, res) {   //login是接口地址，你可以随意写
    //此获取参数的方法是get方法，post要先安装body-parser，有需要的可以联系我
    var user_name = req.body.loginForm.username;       // 获取从接口传递的参数，用户名
    var password = req.body.loginForm.password;    // 获取从接口传递的参数，密码
    //写sql查询语句，login是表名，查看是否有此用户
    var sqls = sql
                .table('sysUser')
                .data({id:'0009',userName:user_name,userPwd:password})
                .insert()
    var sqlParams = [user_name]; 
    //新增
    console.log(sqls)
    conn.query(sqls, sqlParams, function (err, result) {
        if (err) {
            res.send(err.message);
            return;
        }        
            // 如果查询出来的数据密码和传过来的密码一致，登录成功
            
        res.send(sqls);   //把数据返回
    });
}

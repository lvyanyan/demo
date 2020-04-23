const mysql = require('mysql');     //引入mysql模块
exports.base = (sql,data,callback) => {
    const connection = mysql.createConnection({      //创建mysql实例
        host:'http://localhost',
        prot:'3306',
        user:'root',
        password:'root',
        database:'kittty'
    });
    connection.connect();
    connection.query(sql, data, function (error,results, fields) {
        if(error) throw error;
        callback(results);
        console.log("数据库连接成功")
    });
    connection.end();
}

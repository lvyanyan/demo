var express = require('express');
var router = express.Router();

//获取计算器的布局文件
router.get('/', function (req, res, next) {
    res.render('index', {title: '计算器'});
});
//获取rgb布局文件
router.get('/color', function (req, res, next) {
    console.log('123')
    res.render('color', {title: 'rgb 转换器'});
});
//异步获取计算结果
router.post('/calu', function (req, res, next) {
    var f = req.body.vf, s = req.body.vs, t = req.body.vt;
    var c = new Caluc();
    c.plus(s, f, t, function (err, data) {
        res.send(200, data);
    })
});

//异步获取转换成rgb的结果
router.post('/torgb', function (req, res, next) {
    var s = req.body.vs;
    var c = new Coto();
    c.torgb(s, function (err, data) {
        res.send(data);
    })
});

//异步获取转成hex的结果
router.post('/tohex', function (req, res, next) {
    var r = req.body.r, g = req.body.g, b = req.body.b;
    var c = new Coto();
    c.tohex(r, g, b, function (err, data) {
        res.send(data);
    })
});
module.exports = router;
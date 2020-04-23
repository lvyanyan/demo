const express = require('express');
const router = express.Router();
const service = require('./../services/userService');

/** get users listing */
router.get('/', function(req, res, next){
    res.send('respond with a resource')
});

// router.post('/list',service.userList);/**获取用户数据列表 */
 router.post('/login',service.login);/**用户登录数据校验接口 */
 router.post('/regist',service.regist);/**用户注册 */
// router.post('/findByKeyword',service.findByKeyword);/**根据关键字模糊搜索 */
// router.post('/userAdd',service.userAdd);/**添加用户接口 */
// router.post('/userUpdate',service.userUpdate);/**修改用户数据接口 */
// router.get('/findUserById',service.findUserById)/**根据ID查找用户接口 */
// router.get('/deleteUserById',service.deleteUserById)/**根据Id删除用户接口 */
// router.post('/deleteByBatch',service.deleteByBatch)/**批量删除用户 */


module.exports = router;

var express = require('express');
var usersController = require('../controllers/users.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 登录注册模块接口
router.post('/login', usersController.login);
router.post('/register', usersController.register);
router.get('/logout', usersController.logout);
router.get('/verify', usersController.verify);
router.post('/getUser', usersController.getUser);
router.post('/findPassword', usersController.findPassword);

module.exports = router;

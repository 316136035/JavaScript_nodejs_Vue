var express = require('express');
var router = express.Router();

// get路由规则
router.get('/', function(req, res, next) {
  res.send('用户');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var pool = require('../mysql/mysql2_pool');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '插入数据页面' });
});

router.post('/insert', function(req, res, next) {
  let arr=[req.body.username,req.body.password]
  
  pool.query("INSERT INTO `nodejs`.`user` (`id`, `username`, `password`,`time`) VALUES (NULL,  ?, ?,CURRENT_TIMESTAMP)", arr,function(error, results){
    if(error){
      console.log(error)
    }else{
      console.log( results)
    }
  })

})

module.exports = router;

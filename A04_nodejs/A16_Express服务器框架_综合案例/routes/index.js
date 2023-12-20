var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: '主页面' });
 
});


router.post('/add', function(req, res, next) {
   console.log(req.body);
  
   res.send("hha ")
});



router.get('/show', function(req, res, next) {
  
  res.render('show', { title: '显示页面' });
});

module.exports = router;

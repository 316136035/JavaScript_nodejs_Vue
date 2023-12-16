const express = require('express');
const getRouter = express.Router();
getRouter.get('/text', (req, res) => {


  res.send('get-text');


});
getRouter.get('/json', (req, res) => {
  res.send('get-json');

});
module.exports = getRouter;
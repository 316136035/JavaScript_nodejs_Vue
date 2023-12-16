const express = require('express');
const postRouter = express.Router();
postRouter.post('/text', (req, res) => {


  res.send('post-text');


});

module.exports = postRouter;
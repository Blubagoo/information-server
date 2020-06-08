'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
  return res.status(200).json({message: 'connected',});
});

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();

const {getEducation} = require('./eduCtrl');

router.get('/', function(req, res){
  getEducation(req,res);
});

module.exports = router;

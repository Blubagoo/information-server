'use strict';

const express = require('express');
const router = express.Router();

const { getEducation , postEducation } = require('./eduCtrl');

router.get('/', function(req, res){
  getEducation(req,res);
});
router.post('/newEdu', (req, res) => {
	postEducation(req,res);
})

module.exports = router;

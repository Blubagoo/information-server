'use strict';

const express = require('express');
const router = express.Router();

const { getExperience , postExperience } = require('./expCtrl');

router.get('/', function(req, res){
  getExperience(req,res);
});
router.post('/newExp', (req, res) => {
	postExperience(req,res);
})

module.exports = router;

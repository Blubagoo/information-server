'use strict';

const express = require('express');
const router = express.Router();

const { getProject , postProject } = require('./projectCtrl');

router.get('/', function(req, res){
  getProject(req,res);
});
router.post('/newProject', (req, res) => {
	postProject(req,res);
})

module.exports = router;

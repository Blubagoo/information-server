'use strict';

const express = require('express');
const router = express.Router();

const { postMail } = require('./mailCtrl');

router.post('/newMail', (req, res) => {
	postMail(req,res);
})

module.exports = router;

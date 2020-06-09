const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

var corsOptions = {
  origin: 'https://www.jim-tisdale.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = function(app) {
	app.use(morgan('dev'));
	app.use(express.json());
	app.use(cors());
};
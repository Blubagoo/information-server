'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const eduSchema = mongoose.Schema({
	company: String,
	info: String,
	date: [{
		start: String,
		end: String
	}]
});

const Education = mongoose.model('Education', eduSchema);

module.exports = {Education};
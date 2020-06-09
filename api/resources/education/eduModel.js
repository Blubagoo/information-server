'use strict';

const mongoose = require('mongoose');

const eduSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	company: String,
	info: String,
	date: [{
		start: String,
		end: String
	}]
});

const Education = mongoose.model('Education', eduSchema);

module.exports = { Education };
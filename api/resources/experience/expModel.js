'use strict';

const mongoose = require('mongoose');

const expSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	company: String,
	info: String,
	date: [{
		start: String,
		end: String
	}],
	bulletPoints: [
		String
	]
});

const Experience = mongoose.model('Experience', expSchema);

module.exports = { Experience };
'use strict';

const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	email: String,
	message: String
});

const Mail = mongoose.model('Mail', mailSchema);

module.exports = { Mail };
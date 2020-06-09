'use strict';

const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	projectName: String,
	projectURL: String,
	projectDescription: String,
	projectImage: String,
	projectType: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = { Project };
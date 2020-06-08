'use strict';

const { Education } = require('./eduModel');

function getEducation(req,res) {
	return Education.find()
    .then(users => res.json({entries: users}))
    .catch(err => res.status(500).json({message: `${err}`}));
}

module.exports = { getEducation };
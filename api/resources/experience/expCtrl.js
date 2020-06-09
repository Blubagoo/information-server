'use strict';

const { Experience } = require('./expModel');
const mongoose = require('mongoose');



function getExperience(req,res) {
	return Experience.find({})
    .then(users => res.json({entries: users}))
    .catch(err => res.status(500).json({message: `${err}`}));
}
const postExperience = (req,res) => {
	let obj = {
		_id: mongoose.Types.ObjectId(),
		company: req.body.company,
		info: req.body.info,
		date: req.body.date
	}
	let newExperience = new Experience(obj);
	newExperience.save((err,edu) =>{
		if(err) {
			res.status(400).send('there is an error with status', err)
		}
		else {
			res.status(200).json({
				message: "Success on creating a new Experience"
			});
		}
	})

}
module.exports = { getExperience, postExperience };
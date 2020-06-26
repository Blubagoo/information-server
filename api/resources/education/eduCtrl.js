'use strict';

const {Education} = require('./eduModel');
const mongoose = require('mongoose');



const getEducation = (req,res) => {
	return Education.find({})
    .then(users => res.json({entries: users}))
    .catch(err => res.status(500).json({message: `${err}`}));
}
const postEducation = (req,res) => {
	let obj = {
		_id: mongoose.Types.ObjectId(),
		company: req.body.company,
		info: req.body.info,
		date: req.body.date
	}
	let newEducation = new Education(obj);
	newEducation.save((err,edu) =>{
		if(err) {
			res.status(400).send('there is an error with status', err)
		}
		else {
			res.status(200).json();
		}
	})


}
module.exports = { getEducation, postEducation };
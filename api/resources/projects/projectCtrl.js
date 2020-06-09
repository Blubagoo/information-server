'use strict';

const { Project } = require('./projectModel');
const mongoose = require('mongoose');



function getProject(req,res) {
	return Project.find({})
    .then(users => res.json({entries: users}))
    .catch(err => res.status(500).json({message: `${err}`}));
}
const postProject = (req,res) => {
	let obj = {
		_id: mongoose.Types.ObjectId(),
		projectName: req.body.projectName,
		projectURL: req.body.projectURL,
		projectDescription: req.body.projectDescription,
		projectImage: req.body.projectImage,
		projectType: req.body.projectType
	}
	let newProject = new Project(obj);
	newProject.save((err,edu) =>{
		if(err) {
			res.status(400).send({
				message: `Fail on new project ${err}`
			})
		}
		else {
			res.status(200).json({
				message: "Success on creating a new Experience"
			});
		}
	})

}
module.exports = { getProject, postProject };
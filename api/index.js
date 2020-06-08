'use strict';

const educationRoutes = require('./resources/education/eduRoutes');
const experienceRoutes = require('./resources/experience/expRoutes');
const nodeMailRoutes = require('./resources/nodeMail/mailRoutes');
const projectsRoutes = require('./resources/projects/projectRoutes');


module.exports = function(app) {
	app.use('/api/education', educationRoutes);
	app.use('/api/experience', experienceRoutes);
	app.use('/api/nodemail', nodeMailRoutes);
	app.use('/api/projects', projectsRoutes);
}
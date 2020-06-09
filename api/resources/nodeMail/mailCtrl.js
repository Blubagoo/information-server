'use strict';

const { Mail } = require('./mailModel');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const postMail = (req, res) => {
	async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-pulse.com",
      port: 2525,
      secure: true,
      auth: {
        user: 'jctisdale1988@gmail.com',
        pass: 'eLacJcT5Y3B2Fp',
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'webdev@jim-tisdale.com', // sender address
      to: `${req.body.email},webdev@jim-tisdale.com`, // list of receivers
      subject: `Thanks for reaching out ${req.body.name}.`, // Subject line
      text: "Thank you for your submission I will reach out as soon as I can.", // plain text body
      html: req.body.message, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error);
  let obj = {
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  let newMail = new Mail(obj);
  newMail.save((err,edu) =>{
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

module.exports = { postMail };
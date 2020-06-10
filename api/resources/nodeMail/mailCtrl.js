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
      secure: false,
      auth: {
        user: 'jctisdale1988@gmail.com',
        pass: 'eLacJcT5Y3B2Fp',
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'webdev@jim-tisdale.com', // sender address
      to: `webdev@jim-tisdale.com`, // list of receivers
      subject: `${req.body.name}.`, // Subject line
      text: `${req.body.message}`, // plain text body
      html: `${req.body.message}`, // html body
    });
    let info2 = await transporter.sendMail({
      from: 'webdev@jim-tisdale.com', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: `${req.body.name}, Thanks for reaching out!`, // Subject line
      text: 'Thank you for reaching out. I look forward to talking with you and will get with you as soon as I can.', // plain text body
      html: 'Thank you for reaching out. I look forward to talking with you and will get with you as soon as I can.', // html body
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
        message: "Thank you!"
      });
    }
  })
}

module.exports = { postMail };
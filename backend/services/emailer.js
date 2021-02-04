"use strict";
const nodemailer = require("nodemailer");

async function main(mailData) {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "manohar.prasad23@gmail.com", //Gmail email
      pass: "m9431508056", //Gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "manohar.prasad23@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return info.messageId;
  // console.log("Message sent: %s", info.messageId);
};

module.exports = main;
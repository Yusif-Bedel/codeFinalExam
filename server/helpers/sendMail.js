const nodemailer = require('nodemailer');
require("dotenv").config()

async function sendVerifyEmail(email, token) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailData = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: 'Verify Your Email (FURN)',
    text: 'That was easy!',
    html: `Click here <b style="color:red"><a href="http://localhost:${process.env.PORT}/api/verify/${token}" > here </a></b> to verify your account:<a href="http://localhost:${process.env.PORT}/api/verify/${token}" >http://localhost:${process.env.PORT}/api/verify/${token}" >here </a></b> to verify your account:<a href="http://localhost:${process.env.PORT}/api/verify/${token} </a> `
  }

  await transporter.sendMail(mailData)
}

module.exports = sendVerifyEmail
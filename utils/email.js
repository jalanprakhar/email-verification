require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        //use and outlook email
        user: process.env.EM,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EM,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;

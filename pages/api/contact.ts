import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  port: 587,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

export default async (req, res) => {
  const { fullName,email, message } = req.body;

  const mailToSchool = {
    from: ``,
    to: 'preettaparia@gmail.com', // Change to your recipient email address
    subject: 'Contact Form Submission', // Change subject as needed
    html: `
    <h1>HI ${fullName}</div>
    <div>Message: ${message}</div>
    <div>Email: ${email}</div>
    `,
  };

  try {
    // Send email to school
    await transporter.sendMail(mailToSchool);
    console.log('Email sent to school successfully');

    // Send response to client
    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).send('Error sending emails');
  }
};

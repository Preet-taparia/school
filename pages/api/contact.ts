import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  port: 587,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL!,
    pass: process.env.PASSWORD!,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { fullName, email, message } = req.body;

  const mailToSchool = {
    from: process.env.EMAIL!, 
    to: 'preettaparia@gmail.com', 
    subject: 'Contact Form Submission', 
    html: `
      <h1>HI ${fullName}</h1>
      <div>Message: ${message}</div>
      <div>Email: ${email}</div>
    `,
  };

  try {
    await transporter.sendMail(mailToSchool);
    console.log('Email sent to school successfully');

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};

export default handler;

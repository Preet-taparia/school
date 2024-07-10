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
  const { firstName, lastName, mobile, email, class: className, parentName } = req.body;

  const mailToSchool = {
    from: process.env.EMAIL!,
    to: 'preettaparia@gmail.com',
    subject: 'Contact Form Submission',
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Student Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Class:</strong> ${className}</p>
      <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
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

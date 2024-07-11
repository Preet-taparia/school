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

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const sendMail = async (mailOptions: MailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendMail;

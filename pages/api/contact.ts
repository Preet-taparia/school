import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import sendMail from '../../lib/sendMail';


dotenv.config();

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
    await sendMail(mailToSchool);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};

export default handler;

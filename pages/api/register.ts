import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import sendMail from '../../lib/sendMail';
import { appendDataToSheet } from '../../lib/sheetUtils';

dotenv.config();

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  class: string;
  parentName: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, mobile, email, class: className, parentName }: RegisterFormValues = req.body;

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
    await sendMail(mailToSchool);
    const sheetResponse = await appendDataToSheet({ firstName, lastName, mobile, email, class: className, parentName }, "Sheet1!A1");
    res.status(200).json({ message: 'Email and data sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error sending email or updating sheet' });
  }
};

export default handler; 

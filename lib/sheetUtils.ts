import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  class: string;
  parentName: string;
}

const appendDataToSheet = async (values: RegisterFormValues, sheet: string) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.SHEETMAIL!,
        private_key: process.env.SHEETPWD!.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEETID!,
      range: sheet,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            values.firstName,
            values.lastName,
            values.mobile,
            values.email,
            values.class,
            values.parentName,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export { appendDataToSheet };

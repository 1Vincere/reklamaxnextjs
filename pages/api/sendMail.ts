import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '@/lib/mail'; // Импортируйте вашу функцию sendMail

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await sendMail({
        to: "reklamax.team@gmail.com",
        name: "Reklamax",
        subject: "New order",
        body: JSON.stringify(data),
      });
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
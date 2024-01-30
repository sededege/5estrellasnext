import { sendEmail } from "./utility/sendEmail";

export default async function handler(req, res) {
  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Invalid request. Please provide all required fields.' });
  }

  await sendEmail(to, subject, html);

  return res.status(200).json({ message: 'Email sent successfully.' });
}
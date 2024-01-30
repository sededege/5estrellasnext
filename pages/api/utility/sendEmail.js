// sendEmail.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: '5estrellas2023@gmail.com',
    pass: 'fhia vyhs bfsm zzxk',
  },
});

export const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: '5estrellas2023@gmail.com',
      to,
      subject,
      html,
    });

    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

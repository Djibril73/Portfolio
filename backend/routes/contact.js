const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // mot de passe d'application !
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 Nouveau message de ${name}`,
      text: `
Nom: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erreur envoi mail :', err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
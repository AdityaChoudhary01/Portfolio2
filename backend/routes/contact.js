const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Set up nodemailer transport (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NOTIFY_EMAIL_USER,   // your-notify-gmail@gmail.com
    pass: process.env.NOTIFY_EMAIL_PASS    // app password if 2FA on
  }
});

// Contact POST route
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // Send notification mail
    const mailOptions = {
      from: `"Portfolio Bot" <${process.env.NOTIFY_EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL_TO,      // Your real personal email
      subject: "New Portfolio Contact Message",
      text: `You received a new message on your portfolio website:\n\nFrom: ${name} <${email}>\n\n${message}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.error("Mail error:", error);
      else console.log('Notification email sent:', info.response);
    });

    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

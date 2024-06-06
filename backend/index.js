const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const receivingEmailAddress = 'rajendra1234jangid@gmail.com'; // Replace with your receiving email address

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).send('All fields are required');
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
            auth: {
                user: 'kumawatritik54@gmail.com', // Replace with your email
                pass: 'nwco avbe krim sipm'   // Replace with your email password
            }
        });

        const mailOptions = {
            from: email,
            to: receivingEmailAddress,
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent: ' + info.response);
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

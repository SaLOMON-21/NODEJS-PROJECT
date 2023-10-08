// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using your email service's credentials
const transporter = nodemailer.createTransport({
service: 'your-email-service',
auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
},
});

// Define email data
const mailOptions = {
from: 'your-email@example.com',
to: 'recipient@example.com',
subject: 'Hello from Node.js',
text: 'This is a test email sent from Node.js using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    console.error('Error sending email:', error);
} else {
    console.log('Email sent successfully:', info.response);
}
});

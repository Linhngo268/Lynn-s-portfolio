const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('port', 8080);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public',)));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','example.html'));
});

// Handle form submission
// app.post('/send-email', (req, res) => {
//     const email= req.body.email;
//     const name = req.body.name;
//     const message = req.body.message;
   



//     // Create a transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'lynnngo2608@gmail.com',
//             pass: 'yqsj mwzz mokf iagt',
//         },
//     });

//     // Setup email data
//     const mailOptions = {
//         from:email, // Sender address
//         to: 'lynnngo2608@gmail.com', // List of receivers
//         subject: `Message from ${name} (${email})`, // Subject line
//         text: message, // Plain text body
//         replyTo: email,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.send('Error: ' + error.message);
//         }
    
//         res.status(200).json({ message: 'Thank you for your email. I appreciate you taking the time to reach out to me. I will review your message and respond to you as soon as possible.Thank you for your understanding and patience.</p>' });
         
        
         
//     });
// });


module.exports = app;

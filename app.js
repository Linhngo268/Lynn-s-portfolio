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
app.post('/thankyou.html', (req, res) => {
    const Email= req.body.email;
    const Name = req.body.name;
    const Message = req.body.message;
   



    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lynnngo2608@gmail.com',
            pass: 'yqsj mwzz mokf iagt',
        },
    });

    // Setup email data
    const mailOptions = {
        from:Email, // Sender address
        to: 'lynnngo2608@gmail.com', // List of receivers
        subject: `Message from ${Name} (${Email})`, // Subject line
        text: Message, // Plain text body
        replyTo: Email,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error: ' + error.message);
        }
    
        res.status(200).json({ message: 'ok' });
        res.redirect('/thankyou.html');
        
         
    });
});


module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Post endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
    try {
        // Extract form data from request body
        const { first_name, last_name, email, phone_number, company_name, company_size, country, services, info } = req.body;
        
        // Create reusable transporter object using the default SMTP transport
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'goku88252@gmail.com',
                pass: 'Goku@123'
            }
        });

        // Setup email data with unicode symbols
        let mailOptions = {
            from: 'your_email@gmail.com',
            to: ''
        }
    }

    catch(error) {
        console.log(error);

    }
})


// Path: server/server.js

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
    }
);


// Path: server/server.js
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Server start point
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
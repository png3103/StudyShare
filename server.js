const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Load credentials from credentials.json
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
const { client_id, client_secret, redirect_uris } = credentials.web;

// Initialize OAuth2 client
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Function to get authorization URL (only needed once for setup)
async function authorize() {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
    });
    console.log('Authorize this app by visiting this URL:', authUrl);
}

// Root route - Optional message
app.get('/', (req, res) => {
    res.send('Welcome to StudyShare Email Service API. Please authorize by visiting /authorize to submit questions.');
});

// Route to initiate authorization
app.get('/authorize', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send'],
    });
    res.redirect(authUrl);
});

// Endpoint to handle the redirect and authorization code exchange
app.get('/oauth2callback', async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('Authorization code not found in the URL');
    }

    try {
        // Exchange the authorization code for tokens
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);

        // Save the tokens for future use
        fs.writeFileSync('token.json', JSON.stringify(tokens));
        
        // Send a success message to the browser
        res.send('Authorization successful! Tokens have been saved. You can now use the /sendQuestion endpoint.');
        console.log('Tokens acquired and saved:', tokens);
    } catch (error) {
        console.error('Error retrieving access token', error);
        res.status(500).send('Error retrieving access token');
    }
});

// Function to send email using Gmail API
async function sendEmail(subject, messageBody, recipientEmail) {
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    const emailContent = `
        To: ${recipientEmail}
        Subject: ${subject}

        ${messageBody}
    `;
    const encodedMessage = Buffer.from(emailContent)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: encodedMessage,
        },
    });
}

// Endpoint to handle question submissions
app.post('/sendQuestion', async (req, res) => {
    const { title, content, email, phone } = req.body;
    const subject = `User Question: ${title}`;
    const messageBody = `Content: ${content}\nEmail: ${email}\nPhone: ${phone}`;
    const recipientEmail = 'yourcompany@example.com'; // Replace with your actual email

    try {
        await sendEmail(subject, messageBody, recipientEmail);
        res.status(200).send('Question submitted successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send question.');
    }
});

// Start server and log authorization link
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Visit http://localhost:3000/authorize to authorize the application.');
});
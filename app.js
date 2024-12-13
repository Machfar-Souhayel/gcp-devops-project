// Import the required module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const PORT = process.env.APP_PORT || 3000;

// Define the /status API
app.get('/status', (req, res) => {
    res.json({ status: 'ok' });
});

// Define the /ready API
app.get('/ready', (req, res) => {
    res.send('ok');
});

// Define the /live API
app.get('/live', (req, res) => {
    res.send('ok');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

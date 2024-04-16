const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'docs')));

// Route to get the JSON data
/*
app.get('/weapons', (req, res) => {
    // Read the JSON data from a file
    fs.readFile('./weapons.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading weapons.json');
        } else {
            res.json(JSON.parse(data));
        }
    });
});
*/

// default route
app.get('/', (req, res) => {
    // Read the JSON data from a file
    fs.readFile('./docs/assets/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});


// Start the server
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
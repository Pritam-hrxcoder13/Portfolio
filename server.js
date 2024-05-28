const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the main.js file directly without fallback
app.get('/main.3fe171a8.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'main.3fe171a8.js'));
});

// Fallback to index.html for other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

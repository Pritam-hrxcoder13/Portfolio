const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Ensure correct MIME type for CSS files
app.use('/static/css', express.static(path.join(__dirname, 'build/static/css'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

// Catch-all handler to return the main index.html file for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

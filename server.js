const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Fallback to index.html for other routes
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'build', req.path);
    if (req.path.startsWith('/static') || req.path.endsWith('.js') || req.path.endsWith('.css') || req.path.endsWith('.json')) {
        res.sendFile(filePath, (err) => {
            if (err) {
                res.sendFile(path.join(__dirname, 'build', 'index.html'));
            }
        });
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

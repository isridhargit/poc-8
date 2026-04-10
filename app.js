const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from POC-8! CI PIPELINE IS WORKING!');
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});

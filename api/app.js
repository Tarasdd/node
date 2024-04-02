const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

app.get('/', (req, res) => {
    res.send(process.env.TEXT);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

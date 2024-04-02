// proxy/app.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PROXY_PORT || 3001; // Використовуємо порт з .env файлу, або 3001 якщо він не заданий

// URL до API отримуємо з .env файлу
const apiURL = process.env.API_URL || 'http://localhost:3000';

app.get('/', async (req, res) => {
    try {
        // Виконуємо GET запит до API
        const response = await axios.get(apiURL);

        // Повертаємо результат отриманий з API
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data from API:", error.message);
        res.status(500).send("Error fetching data from API");
    }
});

app.listen(port, () => {
    console.log(`Proxy server is listening at http://localhost:${port}`);
});

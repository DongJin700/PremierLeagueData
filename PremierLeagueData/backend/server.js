const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Optional: to allow CORS for development
 
const app = express();

// Optional: Enable CORS for all routes (useful for development)
app.use(cors());

const API_KEY = ''; // Replace with your actual API key
const BASE_URL = 'https://api.football-data.org/v4';

// Define a route to fetch competitions
app.get('/competitions', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/competitions`, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Premier League:', error);
    res.status(500).json({ error: 'Failed to fetch Premier League' });
  }
});

app.get('/competitions/standings', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/competitions/PL/standings`, {
            headers: { 'X-Auth-Token': API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Premier League Standing:', error);
        res.status(500).json({ error: 'Failed to fetch Premier League Standings' });
    }
});

app.get('/competitions/teams', async (req, res) => {
  try {
      const response = await axios.get(`${BASE_URL}/competitions/PL/teams`, {
          headers: { 'X-Auth-Token': API_KEY }
      });
      res.json(response.data);
  } catch (error) {
      console.error('Error fetching Premier League Teams:', error);
      res.status(500).json({ error: 'Failed to fetch Premier League Teams' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Express Setup: The server is created using Express and listens on port 3001 (or any available port defined in the environment).
// CORS: The cors middleware is used to enable CORS (optional for development).
// API Route: The /competitions route makes a request to the football-data.org API using Axios and sends the data back to the client.
// Error Handling: The code handles errors by logging them and returning a 500 status with an error message.
# Premier League Data API Integration with Node.js

A Node.js-based server application that fetches and serves Premier League data, including competitions, standings, and teams, using the football-data.org REST API. This project demonstrates server-side programming with Express and Axios, alongside effective error handling and optional CORS support for seamless client integration.

---

## Features

- **Fetch Competitions**: Retrieve a list of football competitions from the API.
- **Get Standings**: Access the current standings for the Premier League.
- **Fetch Teams**: Retrieve detailed information about Premier League teams.
- **Error Handling**: Logs errors and provides descriptive HTTP error responses.
- **CORS Support**: Optional CORS middleware for development flexibility.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Web framework for setting up routes and handling HTTP requests.
- **Axios**: Promise-based HTTP client for API requests.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing (optional for development).

---

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your system.  
   [Download Node.js](https://nodejs.org/)

2. **API Key**: Obtain an API key from [football-data.org](https://football-data.org/).

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/premier-league-api-integration.git
   cd premier-league-api-integration

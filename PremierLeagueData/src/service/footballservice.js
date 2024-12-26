import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://api.football-data.org/v4';

const footballService = axios.create({
    baseURL: BASE_URL,
    headers: { 'X-Auth-Token': API_KEY }
  });

export const getCompetitions = async () => {
  try {
    const response = await footballService.get('/competitions/PL');
    return response.data;
  } catch (error) {
    console.error('Error fetching competitions:', error);
    throw error;
  }
};
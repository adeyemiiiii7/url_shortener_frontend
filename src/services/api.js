import axios from 'axios';

// Base URL for API - updated based on environment
const API_BASE_URL = import.meta.env.PROD
  ? 'https://url-shortener-na4u.onrender.com/api'
  : import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Configure axios with better error handling
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for clearer error messages
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API service for URL shortener
const api = {
  /**
   * Shorten a URL
   * @param {string} url - The URL to shorten
   * @returns {Promise} - Promise with the response data
   */
  shortenUrl: async (url) => {
    try {
      console.log(`Attempting to shorten URL: ${url}`);
      const response = await apiClient.post('/shorten', {
        originalUrl: url
      });
      
      console.log('Shorten URL response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error shortening URL:', error);
      throw error;
    }
  },

  /**
   * Get statistics for a shortened URL
   * @param {string} shortCode - The short code for the URL
   * @returns {Promise} - Promise with the response data
   */
  getUrlStats: async (shortCode) => {
    try {
      const response = await apiClient.get(`/stats/${shortCode}`);
      return response.data;
    } catch (error) {
      console.error('Error getting URL stats:', error);
      throw error;
    }
  },

  /**
   * Get original URL by short code
   * @param {string} shortCode - The short code for the URL
   * @returns {Promise} - Promise with the response data
   */
  getUrlByShortCode: async (shortCode) => {
    try {
      console.log(`Fetching original URL for short code: ${shortCode}`);
      const response = await apiClient.get(`/url/${shortCode}`);
      console.log('Get URL response:', response.data);
      return response.data;
    } catch (error) {
      console.error(`Error getting original URL for ${shortCode}:`, error.response?.data || error.message);
      throw error;
    }
  }
};

export default api;
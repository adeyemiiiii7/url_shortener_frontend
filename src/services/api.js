import axios from 'axios';

// Base URL for API - updated based on environment
const API_BASE_URL = import.meta.env.PROD
  ? 'https://url-shortener-na4u.onrender.com/api'
  : import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Frontend URL for the deployed application
const FRONTEND_URL = import.meta.env.PROD
  ? 'https://url-shortener-frontend-3jic.onrender.com'
  : import.meta.env.VITE_FRONTEND_URL || window.location.origin;

// API service for URL shortener
const api = {
  /**
   * Shorten a URL
   * @param {string} url - The URL to shorten
   * @returns {Promise} - Promise with the response data
   */
  shortenUrl: async (url) => {
    try {
      // Make POST request to the correct API endpoint
      const response = await axios.post(`${API_BASE_URL}/shorten`, {
        originalUrl: url
      });
      
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
      const response = await axios.get(`${API_BASE_URL}/stats/${shortCode}`);
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
      // Always use the production URL for redirects
      const redirectBaseUrl = 'https://url-shortener-na4u.onrender.com/api';
      const response = await axios.get(`${redirectBaseUrl}/url/${shortCode}`);
      return response.data;
    } catch (error) {
      console.error('Error getting original URL:', error);
      throw error;
    }
  }
};

export default api;
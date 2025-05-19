import axios from 'axios';

// Determine the base URL based on environment
const API_BASE_URL = import.meta.env.PROD
  ? 'https://url-shortener-na4u.onrender.com/api'
  : import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// The full base URL for shortened links
const SHORTENER_BASE_URL = import.meta.env.PROD
  ? 'https://url-shortener-na4u.onrender.com'
  : 'http://localhost:3000';

console.log('Using API base URL:', API_BASE_URL);
console.log('Using shortener base URL:', SHORTENER_BASE_URL);

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add interceptors for better error handling
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🔄 Making ${config.method?.toUpperCase()} request to ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('⚠️ Request error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ Response from ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API service
const api = {
  /**
   * Shorten a URL
   * @param {string} url - The URL to shorten
   * @returns {Promise} - Promise with the response data
   */
  shortenUrl: async (url) => {
    try {
      console.log(`📝 Attempting to shorten URL: ${url}`);
      const response = await apiClient.post('/shorten', {
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
      console.log(`🔍 Fetching original URL for short code: ${shortCode}`);
      const response = await apiClient.get(`/url/${shortCode}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting original URL for ${shortCode}:`, error.response?.data || error.message);
      throw error;
    }
  },
  
  /**
   * Get the full shortened URL
   * @param {string} shortCode - The short code
   * @returns {string} - The full shortened URL
   */
  getFullShortUrl: (shortCode) => {
    return `${SHORTENER_BASE_URL}/${shortCode}`;
  }
};

export default api;
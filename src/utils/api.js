import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    
    // Handle different error types
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    } else if (error.response) {
      // Server responded with error status
      console.error('Server error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response received
      console.error('Network error - no response received');
    }
    
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Get random wellness tip
  getTip: async (category = null) => {
    try {
      const url = category ? `/api/tip?category=${category}` : '/api/tip';
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch wellness tip');
    }
  },

  // Get all tips
  getAllTips: async () => {
    try {
      const response = await api.get('/api/tips');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch all tips');
    }
  },

  // Get tip categories
  getCategories: async () => {
    try {
      const response = await api.get('/api/tips/categories');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch categories');
    }
  },

  // Submit feedback
  submitFeedback: async (feedbackData) => {
    try {
      const response = await api.post('/api/feedback', feedbackData);
      return response.data;
    } catch (error) {
      if (error.response?.status === 422) {
        throw new Error('Please check your input and try again');
      }
      throw new Error('Failed to submit feedback');
    }
  },

  // Get all feedback (admin)
  getAllFeedback: async () => {
    try {
      const response = await api.get('/api/feedbacks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch feedback');
    }
  },
};

export default api;
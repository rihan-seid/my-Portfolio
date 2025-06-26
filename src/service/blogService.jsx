import axios from 'axios';
import { authService } from './auth'; // Import authService instead of getAuthHeader directly

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500/api/v1/blog';

export const blogService = {
  createBlog: async (blogData) => {
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('description', blogData.description);

      blogData.images.forEach((image, index) => {
        formData.append(`images`, image);
      });

      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...authService.getAuthHeader() // Use authService.getAuthHeader()
        }
      });

      return response.data;
    } catch (error) {
      console.error('Blog creation error:', error);
      throw new Error(error.response?.data?.error || 'Failed to create blog');
    }
  },

  getBlogs: async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: authService.getAuthHeader() // Add auth header for consistency
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw new Error('Failed to fetch blogs');
    }
  },

  getBlogById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, {
        headers: authService.getAuthHeader() // Add auth header
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw new Error('Failed to fetch blog');
    }
  },

  updateBlog: async (id, blogData) => {
    try {
      const formData = new FormData();
      formData.append('title', blogData.title);
      formData.append('description', blogData.description);

      if (blogData.images) {
        blogData.images.forEach((image) => {
          formData.append('images', image);
        });
      }

      const response = await axios.put(`${API_URL}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...authService.getAuthHeader()
        }
      });

      return response.data;
    } catch (error) {
      console.error('Blog update error:', error);
      throw new Error(error.response?.data?.error || 'Failed to update blog');
    }
  },

  deleteBlog: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, {
        headers: authService.getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Blog deletion error:', error);
      throw new Error('Failed to delete blog');
    }
  }
};
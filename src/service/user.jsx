import axios from 'axios';
import { authService } from './auth'; // Import authService instead of getAuthHeader directly

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500/api/v1/auth';

export const userService = {
  getAllUsers: () => {
    return axios.get(`${API_URL}/users`, {
      headers: authService.getAuthHeader()
    });
  },

  getUserById: (id) => {
    return axios.get(`${API_URL}/users/${id}`, {
      headers: authService.getAuthHeader()
    });
  },

  updateUser: (id, data) => {
    return axios.put(`${API_URL}/users/${id}`, data, {
      headers: authService.getAuthHeader()
    });
  },

  deleteUser: (id) => {
    return axios.delete(`${API_URL}/users/${id}`, {
      headers: authService.getAuthHeader()
    });
  },

  updateProfile: (data) => {
    return axios.put(`${API_URL}/users/profile`, data, {
      headers: authService.getAuthHeader()
    });
  },

  changePassword: (data) => {
    return axios.put(`${API_URL}/users/change-password`, data, {
      headers: authService.getAuthHeader()
    });
  }
};
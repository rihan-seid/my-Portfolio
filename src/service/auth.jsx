import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4500/api/v1';

// ========== TOKEN UTILS ==========

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token') || null;
};

// Add this function
const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const register = (data) => {
  return axios.post(`${API_URL}/auth/register`, data);
};

// ========== AUTH REQUESTS ==========

const login = (data) => {
  return axios.post(`${API_URL}/auth/login`, data);
};

const userRow = () => {
  const token = getToken();
  return axios.get(`${API_URL}/auth/getuser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ========== DECODED USER INFO ========== 

const getUserEmail = () => {
  const token = getToken();
  if (token) {
    const payload = jwtDecode(token);
    return payload?.firstname || null;
  }
  return null;
};

const getUserRole = () => {
  const token = getToken();
  if (token) {
    const payload = jwtDecode(token);
    return payload?.role || null;
  }
  return null;
};

const getuserId = () => {
  const token = getToken();
  if (token) {
    const payload = jwtDecode(token);
    return payload?.userId || null;
  }
  return null;
};

const getUserALL = () => {
  const token = getToken();
  if (token) {
    const payload = jwtDecode(token);
    return payload || null;
  }
  return null;
};

const isLoggedIn = () => {
  const token = getToken();
  if (token) {
    const payload = jwtDecode(token);
    return Date.now() < payload.exp * 1000;
  }
  return false;
};

const logOut = () => {
  localStorage.clear();
};

// ========== EXPORT SERVICE ==========

export const authService = {
  setToken,
  getToken,
  getAuthHeader, // Add this to exports
  logOut,
  login,
  userRow,
  getUserEmail,
  getUserRole,
  getuserId,
  getUserALL,
  isLoggedIn,
  register
};
import axios from "axios";
import { authService } from "./authService"; // adjust path if necessary

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4500/api/v1";

// Axios instance
const api = axios.create({
  baseURL: `${API_URL}/blog`,
});

// Helper to attach token
const getAuthHeader = () => {
  const token = authService.getToken();
  return {
    Authorization: `Bearer ${token}`,
  };
};

// =======================
// 🔽 Get all ads
// =======================
export const getAllAds = async () => {
  try {
    const response = await api.get("/");
    return response.data.ads;
  } catch (error) {
    console.error("Error fetching ads:", error);
    throw new Error(error.response?.data?.error || "Failed to fetch ads");
  }
};

// =======================
// 🔽 Get ad by ID
// =======================
export const getAdById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ad:", error);
    throw new Error(error.response?.data?.error || "Failed to fetch ad");
  }
};

// =======================
// ✅ Create new ad (with images)
// =======================
export const createAd = async (adData) => {
  try {
    const formData = new FormData();
    formData.append("title", adData.title);
    formData.append("description", adData.description);

    if (adData.images && adData.images.length > 0) {
      adData.images.forEach((img) => {
        formData.append("images", img);
      });
    }

    const response = await api.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...getAuthHeader(),
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating ad:", error);
    throw new Error(error.response?.data?.error || "Failed to create ad");
  }
};

// =======================
// ✏️ Update ad (with optional images)
// =======================
export const updateAd = async (id, adData) => {
  try {
    const formData = new FormData();
    formData.append("title", adData.title);
    formData.append("description", adData.description);

    if (adData.images && adData.images.length > 0) {
      adData.images.forEach((img) => {
        formData.append("images", img);
      });
    }

    const response = await api.put(`/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...getAuthHeader(),
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating ad:", error);
    throw new Error(error.response?.data?.error || "Failed to update ad");
  }
};

// =======================
// ❌ Delete ad
// =======================
export const deleteAd = async (id) => {
  try {
    const response = await api.delete(`/${id}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting ad:", error);
    throw new Error(error.response?.data?.error || "Failed to delete ad");
  }
};

// =======================
// 👤 Get all ads by logged-in user
// =======================
export const getUserAds = async () => {
  try {
    const response = await api.get("/ads/user", {
      headers: getAuthHeader(),
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user ads:", error);
    throw new Error(error.response?.data?.error || "Failed to fetch user ads");
  }
};

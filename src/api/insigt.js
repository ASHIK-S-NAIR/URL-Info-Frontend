import axios from "axios";
import { API } from "../setup/backend-manager";

export const getInsightUrl = async (token, userId, url) => {
  try {
    const { data } = await axios.post(`${API}/insight/${userId}`, {url}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllInsights = async (userId) => {
  try {
    const { data } = await axios.get(`${API}/insight/${userId}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteInsight = async (userId, insightId) => {
  try {
    const { data } = await axios.delete(
      `${API}/insight/${insightId}/${userId}`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// delete all insights
export const deleteAllInsights = async (userId) => {
  try {
    const { data } = await axios.delete(`${API}/insight/${userId}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// delete all insights
export const updateInsight = async (insightId, userId) => {
  try {
    const { data } = await axios.delete(
      `${API}/insight/${insightId}/${userId}`
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

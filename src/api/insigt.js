import axios from "axios";
import { API } from "../setup/backend-manager";

export const getInsightUrl = async (token, userId, url) => {
  try {
    const { data } = await axios.post(
      `${API}/insight/${userId}`,
      { url },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllInsights = async (token, userId) => {
  try {
    const { data } = await axios.get(`${API}/insight/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteInsight = async (token, userId, insightId) => {
  try {
    const { data } = await axios.delete(
      `${API}/insight/${insightId}/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// delete all insights
export const deleteAllInsights = async (token, userId) => {
  try {
    const { data } = await axios.delete(`${API}/insight/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// delete all insights
export const updateInsight = async (token, userId, insightId, favourite) => {
  try {
    const { data } = await axios.put(
      `${API}/insight/${insightId}/${userId}`,
      { favourite },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

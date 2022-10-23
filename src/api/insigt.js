import axios from "axios";
import { API } from "../setup/backend-manager";

// getInsightUrl - Function to handle getInsightUrl API, API to cget url insights and store the insight details inside insight collection.
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

// getAllInsights - Function to handle getAllInsights API, API to gell all insights from insights collection.
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

// deleteInsight - Function to handle deleteInsight API, API to delete an insight from insights collection.
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

// deleteAllInsight - Function to handle deleteALlInsight API, API to delete all insights from insights collection.
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

// updateInsight - Function to handle updateInsight API, API to update an insight inside insights collection.
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

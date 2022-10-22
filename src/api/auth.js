import axios from "axios";
import { API } from "../setup/backend-manager";

export const signup = async (name, email, password) => {
  try {
    const { data } = await axios.post(`${API}/signup`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(`${API}/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("urlInfo_jwt", JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("urlInfo_jwt")) {
    return JSON.parse(localStorage.getItem("urlInfo_jwt"));
  } else {
    return false;
  }
};

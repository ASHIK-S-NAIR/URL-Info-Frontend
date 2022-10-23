import axios from "axios";
import { API } from "../setup/backend-manager";

// signu - Function to handle signup API
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

// login - Function to handle login API
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

//logout - Function to handle logout
export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("urlInfo_jwt");
  }

  return true;
};

// authenticate - Function to handle authenticate, ie saves token, user details into local storage
export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("urlInfo_jwt", JSON.stringify(data));
  }
};

//isAuthenticate - Function to handle isAuthenticate, checks local storage for authentication details and if present returns it.
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

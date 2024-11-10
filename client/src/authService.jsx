import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const authService = {
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token); // Save token for future use
    return token;
  },
  register: async (username, password) => {
    return await axios.post(`${API_URL}/register`, { username, password });
  },
};

export default authService;

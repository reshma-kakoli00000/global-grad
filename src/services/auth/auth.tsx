import axios from "axios";

const baseURL = "http://localhost:8000/"; // Replace with your backend URL
// const baseURL = "https://literally-many-lacewing.ngrok-free.app/"; //ngrok url for testing

export class AuthService {
  static async login(email: string, password: string) {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const response = await axios.post(`${baseURL}auth/token/`, formData);
      return response.data; // Assuming the backend returns user data and token
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  static async register(fullName: string, email: string, password: string) {
    try {
      const response = await axios.post(`${baseURL}users/students`, {
        name: fullName,
        email,
        password,
      });
      return response.data; // Assuming the backend returns user data and token
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  static async getCurrentUser(token: string) {
    try {
      const response = await axios.get(`${baseURL}users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to get current user:", error);
      throw error;
    }
  }
}

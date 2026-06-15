import axios from "axios";

// const baseURL = "http://localhost:8000/"; // Replace with your backend URL
const baseURL = "literally-many-lacewing.ngrok-free.app/"; //ngrok url for testing

export class AuthService {
  static async login(email: string, password: string) {
    try {
      const response = await axios.post(`${baseURL}api/login/`, {
        email,
        password,
      });
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
}

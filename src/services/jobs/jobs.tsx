import axios from "axios";

// const API_BASE_URL = "http://localhost:8000/"; // Replace with your backend URL

const API_BASE_URL = "https://literally-many-lacewing.ngrok-free.app/";

export async function getJobs() {
  const token = localStorage.getItem("admin_token");

  const response = await axios.get(
    `${API_BASE_URL}jobs/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': 'true', 
      },
    }
  );

  return response.data;
}
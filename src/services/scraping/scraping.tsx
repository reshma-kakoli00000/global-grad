import axios from "axios";

const API_BASE_URL = "http://localhost:8000/"; // Replace with your backend URL

// const API_BASE_URL = "https://literally-many-lacewing.ngrok-free.app/";

export async function submitUniversityScrape(sources) {
  const token = localStorage.getItem("admin_token");

  const response = await axios.post(
    `${API_BASE_URL}scrape/universities`,
    {
      sources: sources,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    },
  );

  return response.data;
}


// Configured Axios Instance for making HTTP requests
import axios from "axios";

export const api = axios.create({
baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});
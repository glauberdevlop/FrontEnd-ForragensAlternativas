import axios from "axios";

const api = axios.create({
    baseURL: "https://forragensalt.onrender.com"
})

export default api;
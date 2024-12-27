import axios from "axios";
axios.defaults.baseURL = "https://portfoliobackend-f2m9.onrender.com/api/web"
export function contact(data) {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    return axios.post("/contact", data);
}
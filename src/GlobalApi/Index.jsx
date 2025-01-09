import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_KEY;
console.log('REACT_APP_API_BASE_URL:', process.env.REACT_APP_API_KEY);
export function contact(data) {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    return axios.post("/contact", data);
}
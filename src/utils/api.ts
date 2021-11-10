import axios from "axios";
const client = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT || "http://192.168.1.34:8000/api/",
});

export default client;

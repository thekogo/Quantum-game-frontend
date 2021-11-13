import axios from "axios";
const client = axios.create({
  baseURL:
    // "http://localhost:8000/api/" ||
    "https://qx-nstfair.pj.innosoft.kmutt.ac.th/api/",
});

export default client;

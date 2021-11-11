import axios from "axios";
const client = axios.create({
  baseURL:
    "http://localhost:8000/api/" ||
    "http://qx-nstfair.pj.innosoft.kmutt.ac.th/api/",
});

export default client;

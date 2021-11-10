import axios from "axios";
const client = axios.create({
  baseURL:
    process.env.REACT_APP_API_ROOT ||
    "http://qx-nstfair.pj.innosoft.kmutt.ac.th/api/",
});

export default client;

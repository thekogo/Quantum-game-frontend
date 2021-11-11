import axios from "axios";
const client = axios.create({
  baseURL: "http://qx-nstfair.pj.innosoft.kmutt.ac.th/api/",
});

export default client;

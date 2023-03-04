import axios from "axios";

const server = axios.create({
  baseURL: "https://krishna-tiwari.onrender.com",
  timeout: 1000,
});

export default server;

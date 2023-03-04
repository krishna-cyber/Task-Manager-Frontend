import axios from "axios";

const server = axios.create({
  baseURL: "https://backend-task-manager-api.onrender.com",
  timeout: 1000,
});

export default server;

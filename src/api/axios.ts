import axios from "axios";

const api = axios.create({
  baseURL: "https://strapi.greatstack.in/api",
});

export default api;

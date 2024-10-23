import axios from "axios";
import { LocalDatabaseService } from "../LocalDatabaseService";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Content-Type': "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await LocalDatabaseService.getData('token');
    if (token.result) config.headers!["Authorization"] = "Bearer " + token.data;
    return config;
  },
  (error) => Promise.reject({ error })
);

export default axiosInstance;

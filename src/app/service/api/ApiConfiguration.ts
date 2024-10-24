import axios from "axios";
import { LocalDatabaseService } from "../LocalDatabaseService";
import { UserType } from "@/app/types";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Content-Type': "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const res = await LocalDatabaseService.getData('user');
    const token = (res.data as UserType).access_token
    if (res.result && token) config.headers!["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => Promise.reject({ error })
);

export default axiosInstance;

import axios from 'axios';
import { cookies } from 'next/headers';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async(config) => {
    //   const token = await LocalDatabaseService.getData('token');
      const token = cookies().get('token')?.value
      if (token) 
          config.headers!['Authorization'] = 'Bearer ' + token;
      return config;
  },
  (error) =>  Promise.reject({ error })
);

export default axiosInstance;
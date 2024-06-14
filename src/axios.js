import axios from 'axios';

  axios.defaults.baseURL = 'https://simpeg-backend-i5sbw2egaa-as.a.run.app/api/'; 
//  axios.defaults.baseURL = 'http://192.168.5.145:8080/api/'; 
//axios.defaults.baseURL = 'https://vj5lmgq0-8080.asse.devtunnels.ms/api/';
//axios.defaults.baseURL =  'http://api-pdmsleman.umy.ac.id';

axios.interceptors.request.use(
    (config) => {
      // Optionally, you can also add the token if needed
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = token;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axios;





import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BLOG_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// // Add a request interceptor
// api.interceptors.request.use(
//     (config) => {
//       // Add token to headers if available
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

// // Add a response interceptor
// api.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       if (error.response.status === 401) {
//         // Handle unauthorized access (e.g., redirect to login)
//       }
//       return Promise.reject(error);
//     }
//   );
  
  export default api;
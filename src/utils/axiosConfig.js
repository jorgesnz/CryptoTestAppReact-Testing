import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`, // Asegúrate de que la URL base sea correcta
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;

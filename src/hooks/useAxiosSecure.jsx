import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        
        return config;
    });

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, 
    error => {
        console.log(error)
        if (error.status === 401 || error.status === 403) {
            logOut()
                .then(() => {
                    console.log('sign out user for 401 status code')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        return Promise.reject(error)
    }
)

    return axiosInstance;
};

export default useAxiosSecure;
import axios from "axios";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;

    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Mama! Logout kore dimu kintu",
        timer: 1500,
        showConfirmButton: false,
      });
      // if (error.status === 401 || error.status === 403) {
      //   logOut()
      //     .then(() => {
      //       Swal.fire({
      //         icon: "success",
      //         title: "sign out user for 401 status code",
      //         timer: 1500,
      //         showConfirmButton: false,
      //       });
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;

import useAxiosSecure from "../hooks/useAxiosSecure";


const useMyFoodsApi = () => {
    const axiosSecure = useAxiosSecure();

    const myFoodsPromise = email => {
        return axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-foods?email=${email}`)
            .then(res => res.data)
            
    }

    return {
        myFoodsPromise
    };
};

export default useMyFoodsApi;
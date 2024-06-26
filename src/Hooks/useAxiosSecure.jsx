import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://y-alpha-rose.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;

import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-alpha-rose.vercel.app",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;

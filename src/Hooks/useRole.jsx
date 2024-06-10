import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: loadUser = [] ,isLoading} = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data;
    },
  });
  const role = loadUser.role;
  const status = loadUser.status;
  const userId = loadUser._id;
  return [role, status, userId, isLoading];
};

export default useRole;

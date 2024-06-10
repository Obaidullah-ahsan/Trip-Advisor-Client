import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePackages = () => {
  const axiosPublic = useAxiosPublic();
  const { data: packages = [],isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/packages");
      return data;
    },
  });
  return [packages,isLoading]
};

export default usePackages;

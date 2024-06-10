import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGuide = () => {
  const axiosPublic = useAxiosPublic();
  const { data: guides = [] } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/guides");
      return data;
    },
  });
  return [guides];
};

export default useGuide;

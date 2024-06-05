import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allStory = [] } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/story");
      return data;
    },
  });
  return [allStory];
};

export default useLoadStory;

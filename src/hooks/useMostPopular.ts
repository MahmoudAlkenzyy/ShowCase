import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMostPopular = () => {
  const { data: mostPopular, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const { data } = await axios.get("https://freetestapi.com/api/v1/cars?limit=4");

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["Most-popular-cars"],
  });

  return { mostPopular, isLoading };
};

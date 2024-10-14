import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllVehicles = () => {
  const { data: AllVehicles, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const { data } = await axios.get("https://myfakeapi.com/api/cars/?limit=4");

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["All-Vehicles"],
  });

  return { AllVehicles: AllVehicles?.cars, isLoading };
};

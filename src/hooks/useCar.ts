import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useCar = () => {
  const { carId } = useParams();
  const { data: CarDetails, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const { data } = await axios.get(`https://myfakeapi.com/api/cars/${carId}`);
        // console.log(data);

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: [`car-${carId}`],
  });

  return { CarDetails: CarDetails?.Car, isLoading };
};

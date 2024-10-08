import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const useSearch = () => {
  const [filtered, setFiltered] = useState([]);
  const { mutate: search } = useMutation({
    mutationFn: async ({ query }: { query: string }) => {
      try {
        const { data } = await axios.get(`https://freetestapi.com/api/v1/cars?search=${query}`);

        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (data) => {
      console.log(data);

      setFiltered(data);
    },
  });
  return { search, filtered };
};

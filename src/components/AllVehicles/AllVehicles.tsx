import { useState } from "react";
import { CarCard, Search, SectionHead } from "../index";
import { useMostPopular } from "../../hooks/useMostPopular";
import { useSearch } from "../../hooks/useSearch";
import { carInterface } from "../../types";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const AllVehicles = () => {
  const [query, setQuery] = useState("");
  const { mostPopular, isLoading } = useMostPopular();

  const { search, filtered } = useSearch();
  const onClick = () => {
    console.log(search({ query }));
  };
  if (isLoading) return <p>Loading</p>;
  return (
    <div className="py-10 mt-14  w-[80%] m-auto">
      <SectionHead head="POPULAR RENTAL DEALS" />
      <h2 className="text-center font-semibold text-xl py-5">Most popular cars rental deals</h2>
      <Search query={query} setQuery={setQuery} onClick={onClick} />

      <div className="container  mx-auto">
        <div className="flex flex-wrap gap-6 justify-center ">
          {filtered.length
            ? filtered?.map((car: carInterface, idx: number) => {
                return <CarCard key={idx} car={car} />;
              })
            : mostPopular?.map((car: carInterface, idx: number) => {
                return <CarCard key={idx} car={car} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;

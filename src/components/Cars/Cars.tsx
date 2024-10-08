import { useMostPopular } from "../../hooks/useMostPopular";
import { CarCard, Search, SectionHead } from "../index";
import { carInterface } from "../../types/index";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cars = () => {
  const [query, setQuery] = useState("");
  const { mostPopular, isLoading } = useMostPopular();

  const { search, filtered } = useSearch();
  const onClick = () => {
    console.log(search({ query }));
  };
  if (isLoading) return <p>Loading</p>;
  return (
    <div className="container  w-[80%]  mx-auto">
      <SectionHead head="POPULAR RENTAL DEALS" />
      <Search query={query} setQuery={setQuery} onClick={onClick} />
      <div className="flex flex-wrap gap-6 justify-center ">
        {filtered.length
          ? filtered.slice(0, 3)?.map((car: carInterface, idx: number) => {
              return <CarCard key={idx} car={car} />;
            })
          : mostPopular?.map((car: carInterface, idx: number) => {
              return <CarCard key={idx} car={car} />;
            })}
      </div>
      <button className="px-10 py-2 m-auto mt-10 flex gap-2 text-[#6c757d] items-center border-[#6c757d] border rounded-lg hover:bg-[#6c757d] hover:text-white transition-all">
        Show all Vehicles
        <FaLongArrowAltRight size={20} />
      </button>
    </div>
  );
};

export default Cars;

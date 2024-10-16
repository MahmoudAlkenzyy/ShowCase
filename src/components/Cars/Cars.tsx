import { CarCard, Search, SectionHead } from "../index";
import { carInterface } from "../../types/index";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAllVehicles } from "../../hooks/useAllVehicles";

const Cars = () => {
  const [query, setQuery] = useState("");
  const { AllVehicles, isLoading } = useAllVehicles();

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
          : AllVehicles.slice(0, 4)?.map((car: carInterface, idx: number) => {
              return <CarCard key={idx} car={car} />;
            })}
      </div>
      <Link
        to={"all-vehicles"}
        className="px-10 w-[250px] py-2 w- m-auto mt-10 flex gap-2 text-[#6c757d] items-center border-[#6c757d] border rounded-lg hover:bg-[#6c757d] hover:text-white transition-all"
      >
        Show all Vehicles
        <FaLongArrowAltRight size={20} />
      </Link>
    </div>
  );
};

export default Cars;

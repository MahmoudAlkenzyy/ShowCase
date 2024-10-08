import { useState } from "react";
import { CarCard, Pagination, Search, SectionHead } from "../index";
import { useSearch } from "../../hooks/useSearch";
import { carInterface } from "../../types";
import { useAllVehicles } from "../../hooks/useAllVehicles";

const AllVehicles = () => {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(1);
  const { AllVehicles, isLoading } = useAllVehicles();
  const onchange = (val: number) => {
    setCurrent(val);
  };
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
            ? filtered.slice((current - 1) * 7, current * 7)?.map((car: carInterface, idx: number) => {
                return <CarCard key={idx} car={car} />;
              })
            : AllVehicles.slice((current - 1) * 7, current * 7)?.map((car: carInterface, idx: number) => {
                return <CarCard key={idx} car={car} />;
              })}
        </div>
      </div>
      <Pagination currentPage={current} totalPages={Math.ceil(AllVehicles?.length / 7)} onChange={onchange} />
    </div>
  );
};

export default AllVehicles;

import { Link } from "react-router-dom";
import { useCar } from "../../hooks/useCar";
import { SectionHead } from "../index";
import { IoPersonOutline, IoSnowOutline } from "react-icons/io5";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import style from "./style.module.css";
import car from "../../assets/imges/landing-page/sec-5/Audi 1.png";

const CarDetails = () => {
  const { CarDetails, isLoading } = useCar();
  if (isLoading) return <p>Loadin</p>;
  return (
    <div className="mt-16 container">
      <p className="w-[80%] mx-auto">
        <span>
          <Link className="text-blue-500 hover:text-blue-700 transition-all" to={"/"}>
            Home
          </Link>
          <Link className="text-blue-500 hover:text-blue-700 transition-all" to={"/all-vehicles/s"}>
            / Cars
          </Link>
        </span>
        <span> / {CarDetails.make}</span>
      </p>
      <div className="flex flex-wrap mt-12 text-gray-400">
        <div className={`md:w-[50%] w-[100%] ${style.CarDetailsBg} `}>
          <img className={`${style.CarDetailAnimation} w-[90%]`} src={car} alt="" />
        </div>
        <div className="md:w-[50%] min-h-[55vh] w-[100%] flex flex-col items-start f gap-4 justify-center">
          <SectionHead head="WHY CHOOSE US" />
          <h2 className="text-2xl text-slate-800 font-semibold">We offer the best experience with our rental deals</h2>
          <ul>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <IoPersonOutline size={16} />
              {CarDetails.owners} Passanger
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <IoSnowOutline size={16} />
              Air conditioning
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <GiGearStickPattern size={16} />
              {CarDetails.transmission}
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <GiCarDoor size={16} />
              Doors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

import { Link } from "react-router-dom";
import { useCar } from "../../hooks/useCar";
import { SectionHead } from "../index";
import { IoSnowOutline } from "react-icons/io5";

import style from "./style.module.css";
import car from "../../assets/imges/landing-page/sec-5/Audi 1.png";
import { IoIosColorFilter, IoLogoModelS } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

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
        <span> / {CarDetails.car}</span>
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
              <IoIosColorFilter size={16} />
              {CarDetails.car_color}
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <IoSnowOutline size={16} />
              Air conditioning
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <FaCalendarAlt size={16} />
              {CarDetails.car_model_year}
            </li>
            <li className=" mb-3  flex gap-1 items-center  dark:text-gray-400">
              <IoLogoModelS size={16} />
              {CarDetails.car_model}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

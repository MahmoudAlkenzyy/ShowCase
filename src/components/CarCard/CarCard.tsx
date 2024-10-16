import { carInterface } from "../../types/index";
import car2 from "../../assets/imges/card/car2.png";
import { FaBarcode, FaCalendarAlt, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosColorFilter, IoLogoModelS } from "react-icons/io";
import { IoSnowOutline } from "react-icons/io5";
const CarCard = ({ car }: { car: carInterface }) => {
  return (
    <div className=" pt-4 md:max-w-sm md:w-1/4 sm:w-1/2 min-w-[290px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure>
        <img className="rounded-t-lg w-[]" src={car2} alt={car.car_model} />
      </figure>
      <div className="p-5 px-4 w-full">
        <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{car.car}</h6>

        <p className="mb-3 font-semibold flex gap-1 items-center text-gray-700 dark:text-gray-400">
          <FaStar fill="#EFBF14" />
          {4.8}
          <span className="text-gray-500 font-normal">{"(1345 reviews)"}</span>
        </p>
        <div className="grid grid-cols-6 gap-y-3 items-center py-3 text-gray-500 text-sm ">
          <p className="col-span-3 flex items-center gap-1">
            <IoIosColorFilter size={16} />
            {car.car_color}
          </p>
          <p className="col-span-3 flex items-center">
            <IoSnowOutline size={16} />
            Air conditioning
          </p>
          <p className="col-span-3 flex gap-1 items-center">
            <FaCalendarAlt fill="#000" size={16} />
            {car.car_model_year}
          </p>
          <p className="col-span-3 flex gap-1 items-center">
            <IoLogoModelS fill="#000" size={16} />
            {car.car_model}
          </p>
          <p className="col-span-4  flex gap-1 items-center">
            <FaBarcode size={16} />
            {car.car_vin}
          </p>
        </div>
        <hr />
        <div className="py-3 flex justify-between text-gray-500">
          <span>Price</span>
          <span>
            <span className="text-black font-semibold">{car.price}</span>/day
          </span>
        </div>
        <Link
          to={`/all-vehicles/car/${car.id}`}
          className="inline-flex transition-all w-full justify-center text-center gap-1 items-center px-3 py-2 text-sm font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View details
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default CarCard;

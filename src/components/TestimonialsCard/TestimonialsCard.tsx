import { FaStar } from "react-icons/fa";

const TestimonialsCard = ({ img }: { img: string }) => {
  return (
    <div className="flex w-full  gap-3 md:w-[500px] bg-[#fff] shadow-lg rounded">
      <div className="w-1/2">
        <img className="" src={img} alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-3  py-4">
        <p className="font-semibold">
          <span className=" text-4xl"> 5.5</span> Starts
        </p>
        <p className="flex text-[#EFBF14] py-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
        <p className="">
          “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the
          driver is always on time.”
        </p>
        <div className="">
          <p>Charlie Johnson</p>
          <p className="text-sm text-gray-500">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

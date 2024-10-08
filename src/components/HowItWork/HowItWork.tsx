import { BsPersonCheckFill } from "react-icons/bs";
import { InfoCard, SectionHead } from "../index";
import { BiSolidEditLocation } from "react-icons/bi";
import { FaCar } from "react-icons/fa";

const HowItWork = () => {
  return (
    <section className="py-16 container  w-[80%]  mx-auto">
      <SectionHead head="HOW IT WORK" />
      <h2 className="font-semibold text-slate-800 text-[2rem] text-center py-5">Most popular cars rental deals</h2>

      <div className="flex flex-wrap  justify-center">
        <InfoCard Icon={<BiSolidEditLocation />} text="Choose your and find your best car" header="Choose location" />
        <InfoCard
          Icon={<BsPersonCheckFill />}
          text="Select your pick up date and time to book your car"
          header="Pick-up date"
        />
        <InfoCard Icon={<FaCar />} text="Book your car and we will deliver it directly to you" header="Book your car" />
      </div>
    </section>
  );
};

export default HowItWork;

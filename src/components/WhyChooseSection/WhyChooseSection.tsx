import { BsPersonCheckFill } from "react-icons/bs";
import car from "../../assets/imges/landing-page/sec-5/Audi 1.png";
import { OffersCard, SectionHead } from "../index";
import style from "./style.module.css";
import { BiMessageError } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
const WhyChooseSection = () => {
  return (
    <section className={`flex items-center py-5 my-5 ${style.whyBg}`}>
      <div className="w-[50%] hidden sm:block">
        <img src={car} alt="audi" />
      </div>
      <div className="sm:w-[35%] w-[90%] mx-auto  flex flex-col items-start gap-5">
        <SectionHead head="WHY CHOOSE US" />
        <h2 className="font-semibold text-2xl">We offer the best experience with our rental deals</h2>
        <div className="flex flex-col gap-10">
          <OffersCard
            Icon={<BsPersonCheckFill />}
            text="Find a lower price? We’ll refund you 100% of the difference."
            header="Best price guaranteed"
          />
          <OffersCard
            Icon={<BsPersonCheckFill />}
            text="Book your car anytime and we will deliver it directly to you."
            header="24 hour car delivery"
          />
          <OffersCard
            Icon={<BiMessageError />}
            text="Find a lower price? We’ll refund you 100% of the difference."
            header="Best price guaranteed"
          />
          <OffersCard
            Icon={<LuMessagesSquare />}
            text="Have a question? Contact Rentcars support any time when you have problem."
            header="24/7 technical support"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

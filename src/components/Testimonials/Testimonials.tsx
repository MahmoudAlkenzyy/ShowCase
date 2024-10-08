import { SectionHead } from "../index";
import { TestimonialsCard } from "../index";
import girl from "../../assets/imges/landing-page/sec-6/girl.png";
import rec from "../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import style from "./style.module.css";
const Testimonials = () => {
  return (
    <div className={`${style.testimonials} py-10`}>
      <SectionHead head="TEST IMONIALS" />

      <h2 className="text-4xl font-semibold text-center py-4 ">Most popular cars rental deals</h2>

      <div className=" flex justify-around md:flex-row flex-row gap-4 items-center md:items-stretch flex-wrap py-5">
        <TestimonialsCard img={rec} />
        <TestimonialsCard img={girl} />
      </div>
    </div>
  );
};

export default Testimonials;

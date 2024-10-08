import car from "../../assets/imges/landing-page/car 2 1.png";
import style from "./style.module.css";
const Hero = () => {
  return (
    <section className={`grid grid-cols-12 text-start  w-full hero  pb-10  pt-20`}>
      <div className=" md:col-span-5 me-[5%] text-start ms-auto   max-w-[65%] col-span-12 flex flex-col  gap-3   justify-center">
        <h2 className=" font-bold text-5xl text-slate-800">
          Find, book and rent a car
          <span className=" text-blue-500"> Easily</span>
        </h2>
        <p className=" text-gray-700 text-lg pe-5 ">
          Get a car wherever and whenever you need it with your IOS and Android device.
        </p>
      </div>
      <div className=" md:col-span-7 col-span-12 order-first md:order-2 flex flex-col  gap-3   justify-center items-center  ">
        <img src={car} alt="car in hero section " className={`w-[85%] self-end ${style.heroImgAnimation}`} />
      </div>
    </section>
  );
};
export default Hero;

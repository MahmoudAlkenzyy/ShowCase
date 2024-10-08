import android from "../../assets/imges/landing-page/andriod.png";
import ios from "../../assets/imges/landing-page/ios.png";
import phone from "../../assets/imges/landing-page/sec-7/iPhone-14.png";

import { InputForm } from "../index";
const DownloadSection = () => {
  return (
    <section className="pt-10 w-[85%] m-auto flex">
      <div className=" flex flex-col pb-4">
        <h2 className="text-4xl text-slate-900 font-semibold py-3">
          Download Rentcars App for <span className="text-blue-500 ">FREE</span>
        </h2>
        <p className="text-sm">For daster,easier booking and exclusive deals.</p>
        <div className="flex gap-5 py-4 ms-5">
          <img src={android} alt="" />
          <img src={ios} alt="" />
        </div>
        <div className="">
          <InputForm text="Name" />
          <InputForm text="Phone Number" />
          <InputForm text="Email" />
        </div>
        <button
          type="button"
          className="text-white self-center  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Send
        </button>
      </div>
      <div className="md:flex hidden justify-end items-end">
        <img className="w-[60%] h-[70%]" src={phone} alt="" />
      </div>
    </section>
  );
};

export default DownloadSection;

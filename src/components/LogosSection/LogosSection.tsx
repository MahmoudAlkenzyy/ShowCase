import jaguar from "../../assets/imges/landing-page/jaguar.png";
import nissan from "../../assets/imges/landing-page/nissan.png";
import volvo from "../../assets/imges/landing-page/volvo.png";
import audi from "../../assets/imges/landing-page/audi.png";
const LogosSection = () => {
  return (
    <div className="flex w-[80%] mx-auto justify-center flex-wrap">
      <div className="w-1/2 md:w-1/4 sm:w-1/3 flex justify-center">
        <img className="" src={jaguar} alt="jaguar" />
      </div>
      <div className="w-1/2 md:w-1/4 sm:w-1/3 flex justify-center">
        <img className="" src={nissan} alt="nissan" />
      </div>
      <div className="w-1/2 md:w-1/4 sm:w-1/3 flex justify-center">
        <img className="" src={volvo} alt="volvo" />
      </div>
      <div className="w-1/2 md:w-1/4 sm:w-1/3 flex justify-center">
        <img className="" src={audi} alt="audi" />
      </div>
    </div>
  );
};

export default LogosSection;

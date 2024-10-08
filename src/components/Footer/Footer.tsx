import logo from "../../assets/imges/footer/logo-footer.png";
import { TbMessageCircle } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FooterList } from "../FooterList/FooterList";
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#051C34] p-5">
      <div className="py-5 w-[80%] m-auto    ">
        <div className="flex flex-wrap gap-4 justify-between w-full ">
          <div className="w-[250px]">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-1 text-sm">
                <img src={logo} alt="" />
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <CiLocationOn size={25} className="text-gray-300" /> <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <IoCallOutline size={25} className="text-gray-300" /> <p>+603 4784 273 12</p>
              </li>
              <li className="flex items-center gap-1 text-sm text-white">
                <TbMessageCircle size={25} className="text-gray-300" /> <p>rentcars@gmail.com</p>
              </li>
            </ul>
          </div>
          <FooterList header="Our Products" list={["Career", "Car", "Package", "Features", "Princeline"]} />
          <FooterList
            header="Resources"
            list={["Download", "Help Centre", "Guides", "Partner Network", "Cruises", "Developer"]}
          />
          <FooterList
            header="About Rentcars"
            list={["Why choose us", "Our Story", "Investor Relations", "Press Center", "Advertise"]}
          />
          <div className="">
            <h2 className="text-base text-white pb-4">Follow Us</h2>
            <div className="flex text-gray-400 text-2xl gap-3">
              <LuFacebook className="border-gray-400 border-2 rounded-lg " />
              <LuInstagram />
              <LuYoutube />
            </div>
          </div>
        </div>
        <hr className=" py-2" />
      </div>
    </div>
  );
};

export default Footer;

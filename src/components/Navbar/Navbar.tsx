import { Link } from "react-router-dom";
import logo from "../../assets/imges/nav/logo.png";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-transparent  dark:bg-gray-900 absolute w-full z-20 top-0  dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
        <img src={logo} alt="RentCarsLogo" />
        <div className="flex md:order-2 gap-5 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-black font-light focus:ring-4 focus:outline-none 0">
            Sign in
          </button>
          <button
            type="button"
            className="text-white  bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaAlignJustify />
          </button>
        </div>
        <div
          className="items-center bg-white justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-gray-700 font-normal p-4 md:p-0 mt-4  border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/">Become a renter</Link>
            <Link to="/">Rental deals</Link>
            <Link to="/">How it work</Link>
            <Link to="/">Why choose us</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

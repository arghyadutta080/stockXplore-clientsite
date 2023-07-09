import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import StockContext from "../contexts/StockContext";
import logo from "../assets/photos/StockXplore.png";
import { TypeAnimation } from "react-type-animation";
const Navbar = () => {
  const s = useContext(StockContext);
  const handleModal = s.handleModal ;
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <>
      <div className="absolute  flex flex-row justify-between  md:justify-between  items-center h-24 w-full  lg:px-[4.5rem] text-white p-[1rem] z-10">
        <NavLink to="/">
          <h1 className="text-white font-bold text-4xl md:text-5xl min-[1080px]:text-7xl  xl:text-5xl w-full">
            <img src={logo} className="h-[100px] brightness-200 opacity-100 mt-2 w-[120px]" alt="" />
          </h1>
        </NavLink>
        <ul className="hidden  xl:flex flex-row justify-between space-x-10 font-normal text-2xl items-center">
          <li className="p-4">
            <Link to="/">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                Home
              </h1>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/about">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                About Us
              </h1>
            </Link>
          </li>
          <li className="p-4">
            <Link to="/">
              <h1 className="hover:border-b border-spacing-4 hover:border-b-white">
                Guide
              </h1>
            </Link>
          </li>
          <li className="p-4">
            
              <button onClick={handleModal} className="border p-4 font-bold rounded-lg hover:bg-white hover:text-black hover:bg-opacity-70">
              <TypeAnimation
      sequence={[
        
        'Sign Up',
        1000, 
        'Sign In',
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
              </button>
            
          </li>
        </ul>
        <div onClick={handleNav} className="block xl:hidden">
          {!nav ? <FaBars className="h-[25px] w-[25px] min-[1080px]:h-[40px] min-[1080px]:w-[40px] xl:h-[25px] xl:w-[25px]" /> : <FaTimes className="h-[25px] w-[25px] min-[1080px]:h-[40px] min-[1080px]:w-[40px] xl:h-[25px] xl:w-[25px]" />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000] min-[1080px]:text-5xl ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full min-[280px]:text-3xl min-[1080px]:text-7xl  font-bold text-white m-4 pb-4 min-[1080px]:pb-10 mt-5">
            LOGO
          </h1>
          <Link to="/">
            <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">About Us</li>
          </Link>
          <li className="p-4 min-[1080px]:p-10 border-b border-gray-600">Guide</li>

          <li className="p-4 min-[1080px]:p-10">
            <button
              onClick={handleModal}
              className="text-white md:text-2xl min-[1080px]:p-10 min-[1080px]:text-5xl p-2 md:p-4 border my-4 font-semibold rounded-md hover:bg-white hover:text-black hover:bg-opacity-50"
            >
              Sign Up/Sign In
            </button>
          </li>
        </ul>
      </div>
      {}
    </>
  );
};

export default Navbar;
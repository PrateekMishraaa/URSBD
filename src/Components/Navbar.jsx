import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="text-white py-4 bg-[#191246]">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <img src={Logo} alt="logo" className="h-16" />
            </div>
            <div className="flex space-x-6 text-slate-950 ml-96 font-semibold">
              <Link className="text-white" to="/about">About</Link>
              <Link className="text-white" to="/services">Services</Link>
              <Link className="text-white" to="/contact">Contact</Link>
              <Link className="text-white" to="/product">Product</Link>
            </div>
            <Link className="font-sans w-52 text-xl mr-44" to="#login">
              <FaRegUserCircle className="relative right-8 top-6" />
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

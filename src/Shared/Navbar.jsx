import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Logo from "../../src/assets/logo.png";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import {
  FaRegHeart,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleCloseBtn = () => {
    setIsOpen(false);
  };
  const handleMenuBtn = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-full lg:w-5/6 xl:w-11/12 mx-auto py-2 px-2 mt-2">
      {/* Desktop view */}
      <div className={`hidden lg:flex justify-between items-center-safe`}>
        <NavLink to="/">
          <div className="flex gap-2">
            <img src={Logo} className="w-8 h-8 p1 rounded-full" />
            <h4 className="text-2xl text-yellow-500 font-semibold uppercase">
              Dhanshidy <span className="text-green-600"> Studio</span>
            </h4>
          </div>
        </NavLink>
        <div className="w-4/8 flex justify-center items-center">
          <Input type="text" placeholder="Search..." className="w-full" />
          <Button className="rounded-none bg-[#273647]">
            <FaSearch className="cursor-pointer" />
          </Button>
        </div>
        {/* <div>
          <ul className="flex items-center gap-6 ">
            <NavLink to="/dashboard">
              <li className="cursor-pointer hover:text-[#16a4eb] ">
                Dashboard
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer hover:text-[#16a4eb] ">
                Contact us
              </li>
            </NavLink>
          </ul>
        </div> */}
        <div className="flex gap-3">
          <Button className="bg-[#273647] cursor-pointer">Log In</Button>
          <Button className="bg-[#273647] cursor-pointer">Sign Up</Button>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[#273647] cursor-pointer">
            <FaRegHeart />
          </Button>
          <Button className="bg-[#273647] cursor-pointer">
            <FaShoppingCart />
          </Button>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <img src={Logo} className="w-6 h-6 p1 rounded-full" />
              <h4 className="text-xl text-yellow-500 font-semibold uppercase">
                Dhanshidy <span className="text-green-600"> Studio</span>
              </h4>
            </div>
          </NavLink>
          {isOpen ? (
            <MdOutlineClose
              onClick={handleCloseBtn}
              className="text-3xl border rounded-sm cursor-pointer"
            />
          ) : (
            <MdMenu
              onClick={handleMenuBtn}
              className="text-3xl border rounded-sm cursor-pointer"
            />
          )}
        </div>
        {isOpen && (
          <div>
            <div className="flex justify-center">
              <ul className="flex flex-col gap-2">
                <NavLink to="/dashboard">
                  <li className="cursor-pointer hover:text-[#16a4eb] border py-2 px-5 rounded-md">
                    Dashboard
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="cursor-pointer hover:text-[#16a4eb] border py-2 px-5 rounded-md">
                    Contact us
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className="flex flex-col w-32 mx-auto justify-center gap-3 my-3">
              <Button variant="outline" className="bg-[#16a4eb] text-white">
                Log In
              </Button>
              <Button variant="outline" className="bg-green-500 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

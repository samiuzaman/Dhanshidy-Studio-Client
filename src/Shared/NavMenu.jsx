import { NavLink } from "react-router";

export default function NavMenu() {
  return (
    <div className="w-full bg-[#003050] py-2 px-20 text-white text-sm font-medium mt-2">
      <ul className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-10 ">
        {/* Public Route */}
        <NavLink to="/category/services">
          <li className="cursor-pointer hover:underline">Services</li>
        </NavLink>
        <NavLink to="/category/mobile">
          <li className="cursor-pointer hover:underline">Mobile</li>
        </NavLink>
        <NavLink to="/category/accessories">
          <li className="cursor-pointer hover:underline">Accessories</li>
        </NavLink>
        {/* <NavLink to="/category/hearphone">
          <li className="cursor-pointer">Hearphone</li>
        </NavLink>
        <NavLink to="/category/soundbox">
          <li className="cursor-pointer">Sound-Box</li>
        </NavLink> */}
        <NavLink to="/category/stationery-items">
          <li className="cursor-pointer hover:underline">Stationery-Items</li>
        </NavLink>
        {/* <NavLink to="/category/soundbox">
          <li className="cursor-pointer">Office-Supplies</li>
        </NavLink>
        <NavLink to="/category/soundbox">
          <li className="cursor-pointer">Writing-Instruments</li>
        </NavLink>
        <NavLink to="/category/soundbox">
          <li className="cursor-pointer">Paper-Products</li>
        </NavLink> */}
        <NavLink to="/category/soundbox">
          <li className="cursor-pointer">Educational-Supplies</li>
        </NavLink>
        <NavLink to="/category/soundbox">
          <li className="cursor-pointer hover:underline">Electronics</li>
        </NavLink>
        {/* Admin Route */}
        {/* <NavLink to="/category/">
          <li className="cursor-pointer hover:underline"></li>
        </NavLink> */}
      </ul>
    </div>
  );
}

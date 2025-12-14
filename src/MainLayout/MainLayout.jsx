import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NavMenu from "../Shared/NavMenu";

const MainLayout = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <NavMenu/>
      <div className="min-h-[calc(100vh-320px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

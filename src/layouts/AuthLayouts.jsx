import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <nav className="w-5/6 mx-auto py-3">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;

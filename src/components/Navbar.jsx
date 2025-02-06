import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 items-center">
      <div></div>
      <div className="nav space-x-3">
        <Link to="/">Home</Link>
        <Link to="/carrer">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2">
        <div className="">
          <img src={userIcon} alt="" />
        </div>
          <button className="btn btn-neutral rounded-none" >Login</button>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between py-3 items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-3">
        <Link to="/">Home</Link>
        <Link to="/carrer">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-3">
        <div className="">
          {user?.email ? (
            <img
              className="w-10 h-10 rounded-full bg-cover"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

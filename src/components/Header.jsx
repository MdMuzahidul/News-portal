import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center py-3">
      <div className="logo">
        <img className="w-[400px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p className=" font-medium text-lg text-gray-500">{moment().format('dddd, MMMM D, YYYY')}</p>
    </div>
  );
};

export default Header;

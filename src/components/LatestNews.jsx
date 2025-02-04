import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex  gap-1 items-center p-2 bg-gray-300">
      <p className="bg-[#D72050] text-[#FFFFFF] px-5 py-2">Latest</p>
      <Marquee pauseOnHover={true}  className="space-x-2">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
          fuga optio quo, sint voluptatem
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
          fuga optio quo, sint voluptatem
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
          fuga optio quo, sint voluptatem
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

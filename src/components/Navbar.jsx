import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img onClick={()=>navigate(-1)}
            src={assets.arrow_left}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <img onClick={()=>navigate(1)}
            src={assets.arrow_right}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-white">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black cursor-pointer px-4 py-1 rounded-2xl">
          All
        </p>
        <p className="bg-black px-4 py-1 cursor-pointer rounded-2xl">Music</p>
        <p className="bg-black px-4 py-1 cursor-pointer rounded-2xl">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;

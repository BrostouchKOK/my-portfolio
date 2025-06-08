import { Link } from "react-scroll";
import { navLinkData } from "../../constants/index";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-20 sticky top-0 bg-bodyColor z-50 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-3xl text-designColo font-bold cursor-pointer"
      >
        Portfolio
      </Link>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lgl:gap-10">
          {navLinkData.map((navlink) => (
            <li
              key={navlink._id}
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColo
               duration-300"
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 bg-black inline-flex items-center
        justify-center rounded-full text-designColo cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div
            className="w-[80%] h-screen overflow-scroll absolute
            top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
          >
            <div className="flex flex-col gap-10 p-2 relative">
              <div>
                <h2 className="text-2xl font-bold">Portfolio</h2>
              </div>
              <div className="flex flex-col gap-8">
                <ul className="flex flex-col gap-6">
                  {navLinkData.map((item) => (
                    <li
                      className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColo
                      duration-300"
                    >
                      <Link
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base mb-2 uppercase">Find Me In</h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <FaFacebook />
                    </span>
                    <span className="bannerIcon">
                      <FaTelegram />
                    </span>
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                  </div>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColo
              duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

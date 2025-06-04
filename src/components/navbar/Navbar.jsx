import { Link } from "react-scroll";
import { navLinkData } from "../../constants/index";
const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 bg-bodyColor z-50 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600">
      <div className="text-xl font-bold">Portfolio</div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinkData.map((navlink) => (
            <li
              key={navlink._id}
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColo duration-300"
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
      </div>
    </div>
  );
};

export default Navbar;

import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full h-auto py-10 lgl:py-20 border-b-[1px] border-b-black 
    grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-4 lgl:gap-8"
    >
      <div className="w-full h-full">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-designColo tracking-wide">
            Portfolio
          </h2>
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColo tracking-wide">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-light lgl:font-medium py-6 overflow-x-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Home{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Portfolio{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Services{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Blog{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Contact{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColo tracking-wide">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-light lgl:font-medium py-6 overflow-x-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Authentication{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              System Status{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Terms of Service{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Pricing{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Over Right{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColo tracking-wide">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-light lgl:font-medium py-6 overflow-x-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Documentation{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Authentication{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              API Reference{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Support{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColo duration-300 cursor-pointer
                relative group"
            >
              Open Source{" "}
              <span
                className="absolute w-full h-[1px] inline-flex bg-designColo
                    -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform
                    duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaTelegram,
} from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiReact, SiMongodb } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div data-aos = "fade-right" className="w-full lgl:w-1/2 flex flex-col  gap-16">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-4xl lgl:text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColo capitalize">Brostouch KOK</span>
        </h1>
        <h2 className="text-2xl lgl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p>
          a passion for building beautiful, responsive, and user-friendly
          websites. I specialize in turning designs into clean, functional code
          using React, Tailwind CSS, and modern web technologies. I love solving
          problems and crafting smooth user experiences that people enjoy.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase mb-4">FIND ME IN</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/brostouch.kok" target="_blank">
                <FaFacebook />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/brostouch-kok-85a329316/" target="_blank">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://x.com/BrostouchK58204?s=09" target="_blank">
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://t.me/BrostouchK" target="_blank">
                <FaTelegram />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase mb-4">Best Skill on</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

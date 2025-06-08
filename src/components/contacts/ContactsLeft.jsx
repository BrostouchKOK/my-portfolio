import { contactImg } from "../../assets/index";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";

const ContactsLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 
          shadow-shadowOne rounded-lg flex flex-col justify-center gap-5"
    >
      <img
        src={contactImg}
        alt="ContactImg"
        className="w-full h-64 rounded-lg object-cover"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-bold text-white">Brostouch KOK</h3>
        <p className="text-lg text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          passionate about building clean, responsive, and user-friendly web
          interfaces using HTML, CSS, JavaScript, and React.js.
        </p>
        <p className="flex items-center text-gray-400 text-base gap-2">
          Phone: <span className="text-lightText">+855 96 96 34 904</span>
        </p>
        <p className="flex items-center text-gray-400 text-base gap-2">
          Email:{" "}
          <span className="text-lightText">brostouchkokit1007@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base mb-2 uppercase">Find Me In</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/brostouch.kok" target="_blank">
              <FaFacebook />
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
    </div>
  );
};

export default ContactsLeft;

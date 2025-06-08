import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img className="w-[400px] h-[400px] lgl:w-[400px] lgl:h-[420px] z-10" src={bannerImg} alt="" />
      <div
        className="absolute bottom-0 w-full h-[420px] lgl:w-[400px] lgl:h-[430px] bg-gradient-to-r from-[#1e2024]
        to-[#202327] shadow-shadowOne flex justify-center items-center"
      ></div>
    </div>
  );
};

export default RightBanner;

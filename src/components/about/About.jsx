import Title from "../layout/Title";
import { bannerImg } from "../../assets/index";

const About = () => {
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="w-full lgl:w-[80%] grid grid-cols-1 lgl:grid-cols-2 
        gap-8 lgl:gap-20">
        <div
          className="p-8 flex items-center justify-center shadow-shadowOne
          rounded-lg"
        >
          <img className="lgl:w-[400px] lgl:h-[600px]" src={bannerImg} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <Title title={"About"} desc={"A boute me"} />
          <p className="text-sm leading-relaxed lgl:text-lg tracking-wide lgl:leading-loose">
            I am a recent Computer Science graduate from the Royal University of
            Phnom Penh. I want to learn from people who have experience than me
            so I can build the necessary quality for future hiring manager. I am
            a positive person, I keep myself active and I understand that I have
            to work hard to achieve that I want.
          </p>
          <a
            href="/KOK_Brostouch_CV.pdf"
            download
            className="mt-10 lgl:mt-16 shadow-shadowOne py-3 px-5 rounded-full border-[1px]
           border-designColo hover:bg-designColo duration-300 tracking-wide"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
            icon={<FaBars/>}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
            icon={< AiFillAppstore/>}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        icon={<SiProgress/>}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        icon={<FaMobile/>}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        icon={<SiAntdesign/>}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        icon={<FaGlobe/>}
        />
      </div> */}
    </section>
  );
};

export default About;

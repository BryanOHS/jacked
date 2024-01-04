import "./intro.scss";
import Image from "../../assets/img/jacky.png";
import Image1 from "../../assets/img/img1.png";
import { TypeAnimation } from "react-type-animation";

const handleClick = () => {
  const url = "https://www.instagram.com/jackydiinh/reels/";
  window.open(url, '_blank');
};


function Intro() {
  return (
    <section className="w-full h-screen bg-black flex flex-col md:flex-row-reverse md:justify-between pb-11">
      <div className="relative flex w-full h-[700px] md:h-screen md:w-fit md:max-w-[500px] lg:max-w-[800px] ">
        <img
          className="w-[80%] h-auto left-[10%] top-[30%] absolute 2xl:w-[100%] place-self-center xl:transform xl:-translate-x-60"
          src={Image}
          alt="Jacky's image"
        />
        <img className="h-full w-auto" src={Image1} alt="Image 1" />
      </div>

      <div className="p-2 h-[100%] flex flex-col justify-center items-center  xl:items-start md:ml-5 xl:ml-14">
        <div className="xl:flex justify-around  lg:w-[350px] xl:w-[490px] 2xl:w-[620px] hidden ">
          <h1 className="text text-white font-bold lg:text-2xl text-l xl:text-4xl 2xl:text-5xl max-w-fit">
            Jacky
          </h1>
          <h1
            className="text-white font-bold text-l lg:text-2xl g-text xl:text-4xl 2xl:text-5xl max-w-fit"
            data-text="Dinh"
          >
            Dinh
          </h1>
        </div>

        <h1 className=" block text-white uppercase font-bold text-4xl lg:text-5xl xl:hidden">
          Jacky Dinh
        </h1>

        {/*<h2 className="lg:place-self-start text-white font-thin text-2xl uppercase lg:ml-2 lg:mt-[-20px] xl:mt-[-10px] 2xl:text-4xl 2xl:mt-0">Video Editor</h2>*/}
        <TypeAnimation
          sequence={[
            "Video Alchemist",
            1000,
            "Cinematic Wonders",
            1000,
            "Your Story, Our Edit",
            1000,
            "Transforming Visions",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-white uppercase font-bold text-center flex-wrap xl:text-2xl xl:ml-1"
          repeat={Infinity}
        />
        <div className="button-container-1 mt-3 lg:ml-4">
          <span className="mas">VIEW WORK</span>
          <button id="work" type="button" name="Hover" onClick={handleClick}>
            VIEW WORK
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;

import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import WhyKimberlite from "../components/WhyKimberlite/index";
import LimitedOg from "../components/LimitedOg/index";
import Cards from "../components/Cards/";
import KimberliteRoadMap from "../components/KimberliteRoadmap/index";
import GetStarted from "../components/GetStarted/index";
import Footer from "../components/Footer/index";

const Home = () => {
  return (
    <>
      <main
        className={` bg-black   overflow-hidden flex-col items-center justify-between`}
      >
        <div className="relative w-screen h-[100vh] bg-repeat-y  ">
          <img
            src="/elip/elip1.svg"
            alt=""
            className="  absolute md:w-[35%] w-[100%] top-0 right-0 blur-2xl  animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[35%] w-[100%]  top-[500px] blur-2xl   animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[35%] w-[100%]  top-[0] blur-2xl   animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[35%] w-[100%]  top-[300] right-[400px] blur-2xl  animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[35%] w-[100%] right-0 blur-2xl   top-[500px]  animate-bounce"
          />
          <video
            className="absolute top-0 left-0 object-cover min-w-full h-[100vh] mix-blend-screen opacity-60 "
            muted
            src="/video.webm"
            autoPlay
            loop
            style={{ zIndex: "1" }}
          />
          <div className="z-50 w-full h-full ">
            <Navbar />
            <Hero />
          </div>
        </div>
        <div className="relative ">
          <img
            src="/elip/elip1.svg"
            alt=""
            className="  absolute md:w-[35%] w-[100%] top-0 right-0 blur-2xl  animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[65%] w-[100%]  top-[500px] blur-2xl   animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[85%] w-[100%]  top-[0] blur-2xl   animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[35%] w-[100%]  top-[300] right-[400px] blur-2xl  animate-bounce"
          />
          <img
            src="/elip/elip1.svg"
            alt=""
            className="absolute   md:w-[55%] w-[100%] right-0 blur-2xl   top-[500px]  animate-bounce"
          />

          <div className="w-screen h-full bg-no-repeat bg-cover bg-bg-elip2 ">
            <WhyKimberlite />
          </div>
          <LimitedOg />
          <div className="w-screen bg-bg-elip ">
            <Cards />
          </div>
          <div className="">
            
          <KimberliteRoadMap />
          </div>
        <GetStarted />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;

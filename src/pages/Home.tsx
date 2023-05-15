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
        className={` bg-black min-h-screen  overflow-hidden flex-col items-center justify-between`}
      >
        <div className="relative w-screen h-[100vh] bg-repeat-y bg-bg-elip">
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
        <div className="w-screen h-full bg-no-repeat bg-cover bg-bg-elip">
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
        <Footer />
      </main>
    </>
  );
};

export default Home;

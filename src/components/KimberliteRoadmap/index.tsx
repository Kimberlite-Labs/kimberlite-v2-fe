import Slider from "react-slick";
import { team } from "./Team";

const index = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2,
    autoplaySpeed: 1000,
    cssEase: "linear",
    autoplay: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };
  return (
    <div className="lg:gap-3   w-full lg:h-[60vh] h-[full]   bg-no-repeat bg-bg-roadmap">
      <div>
        <div className=" z-[99999999]">
          <Slider {...settings}>
            {team.map((team) => (
              <div
                key={team.id}
                className="flex flex-wrap justify-center space-x-4"
              >
                <div className="flex flex-col px-3 lg:px-1 item-center">
                  <div className="">
                    <p className="m-6 text-xl font-bold text-center text-white mb-21">
                      {team.dis}
                    </p>
                    <div
                      className={` ${
                        team.role ? "bg-[#02024D]" : "bg-[#F04B08]"
                      } lg:w-[85%] w-fit item-center rounded-xl flex items-center h-[54vh] justify-center md:h-[fit] lg:h-[54vh] my-auto  text-white rounded-b-md text-sm   font-bold p-3 lg:text-xl`}
                    >
                      <p className="flex justify-start text-sm text lg:text-lg ">
                        {team.role || team.role1}
                      </p>

                      {/* <p className="pt-2 text-lg ">{team.role}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default index;

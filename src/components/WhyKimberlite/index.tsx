// import { CiVault } from "react-icons/ci";
// import { TbAirBalloon } from "react-icons/tb";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { MdOutlineCardMembership, MdCelebration } from "react-icons/md";

const index = () => {
  return (
    <div className="mx-8 ">
      <div className="w-[100%] h-[fit] text-white ">
        <div className="flex flex-col items-center justify-center gap-5 mt-[50px] lg:mt-[0px]">
          <p className=" lg:text-3xl text-xl lg:mt-[100px]   lg:max-w-[800px] px-2 text-center font-bold">
            {" "}
            Harvest the best yields across multiple blockchains, powered by
            advanced AI algorithms
          </p>

          <div className="  mt-[50px] lg:ml-[100px] border-[#F04B08] p-2  border-dashed lg:text-center lg:max-w-[500px]">
            <img
              className="w-[100%]"
              src="/frame/frame1.svg"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className=" mt-[20px]  flex lg:flex-row flex-col gap-10 justify-between ">
        <div className="flex flex-col items-center gap-5 ">
          <p className="lg:mr-[300px]  text-center shrink-0 text-2xl lg:text-xl mt-20 text-white font-bold">
            Why Kimbelite Labs?
          </p>

          {/* <div className="block mx-3  md:hidden border-b-2 border-l-[4px] mt-10 lg:mt-[100px] lg:ml-[100px] border-[gray] p-2  border-dashed text-center lg:max-w-[500px]"> */}
          <div className="block mx-3 mt-10 md:hidden ">
            <div>
              <img
                className="w-[100%]"
                src="/frame/frame2.svg"
                alt="Logo"
                width={1000}
                height={1000}
              />
            </div>
            {/* <p className="text-[#F04B08] mb-5 text-2xl font-bold">
              User-Centric Experience{" "}
            </p>
            <p className="text-white ">
              Intuitive and easy-to-use platform designed for both DeFi
              newcomers and seasoned veterans Access to comprehensive resources
              and community support to help you navigate the world of
              decentralized finance.
            </p> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row ">
            <div>
              <img src="/images/img1.png" alt="Logo" width={300} height={300} />
            </div>
            <div>
              <img src="/images/img2.png" alt="Logo" width={300} height={300} />
            </div>
          </div>
        </div>

        {/* <div className="hidden md:inline-block border-b-2 border-l-[4px] mt-[100px] lg:ml-[100px] border-[gray] p-2  border-dashed text-center lg:max-w-[500px]"> */}
        <div className="hidden md:inline-block mt-[100px] ">
          <div>
            <img
              className="w-[100%]"
              src="/frame/frame2.svg"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </div>
          {/* <p className="text-[#F04B08] mb-5 text-2xl font-bold">
            User-Centric Experience{" "}
          </p>
          <p className="text-white ">
            Intuitive and easy-to-use platform designed for both DeFi newcomers
            and seasoned veterans Access to comprehensive resources and
            community support to help you navigate the world of decentralized
            finance.
          </p> */}
        </div>
      </div>

      {/* Second part */}
      <div className=" mt-[80px] flex lg:flex-row flex-col gap-12  justify-between ">
        <div className="] mt-[100px] ">
          <div>
            <img
              className="w-[100%] px-2"
              src="/frame/frame3.svg"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </div>
          {/* <div className="border-t-2 mx-3 border-r-[4px] mt-[100px] lg:ml-[100px] border-[gray] p-2  border-dashed text-center lg:max-w-[500px]"> */}
          {/* <p className="text-[#F04B08] mb-5 text-2xl font-bold">
            AI-Driven Yield Optimization{" "}
          </p>
          <p className="text-white ">
            Advanced machine learning algorithms continuously analyze market
            conditions and predict high-yield opportunities Automated portfolio
            rebalancing ensures you stay ahead of the curve and maximize
            returns.
          </p> */}
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row ">
            <div>
              <img src="/images/img1.png" alt="Logo" width={300} height={300} />
            </div>
            <div>
              <img src="/images/img2.png" alt="Logo" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[150px] px-5   ">
        <div>
          <img
            className="lg:w-[70%] w-[90%] mx-auto"
            src="/frame/frame4.svg"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>

        {/* <div className="flex justify-center my-auto lg:hidden">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <p className="text-2xl lg:ml-[400px] text-center text-[#F04B08] font-bold mb-4 ">
          Kimbelite Labs{" "}
        </p>
        <div className="flex items-center border-[4px] mx-auto border-[gray] p-10 gap-5 border-dashed lg:max-w-[600px]">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-[white] text-sm font-bold">
            <div className="flex items-center justify-center gap-1 ">
              <CiVault className="text-[#F04B08] text-3xl" />
              <li>High yield strategies via secure vaults</li>
            </div>
            <div className="flex items-center justify-center gap-1">
              <TbAirBalloon className="text-[#F04B08] text-3xl" />
              <li>Labs Airdrops and IDO whitelists</li>
            </div>
            <div className="flex items-center justify-center gap-1">
              <BsFillPersonLinesFill className="text-[#F04B08] text-3xl" />
              <li>NFT Fair and Partners whitelists</li>
            </div>
            <div className="flex items-center justify-center gap-1">
              <MdOutlineCardMembership className="text-[#F04B08] text-3xl" />
              <li>Dao Membership </li>
            </div>
            <div className="flex items-center justify-center gap-1 ">
              <MdCelebration className="text-[#F04B08] text-3xl lg:text-2xl" />
              <li>And so much More</li>
            </div>
          </ul>
          <div className="hidden my-auto lg:inline-block">
            <Image src="/images/logo.png" alt="Logo" width={300} height={300} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default index;

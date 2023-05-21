import { BsDiscord, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";

const index = () => {
  return (
    <div className="flex flex-col font-bold items-center justify-center w-[100%] h-[30vh] bg-[gray] ">
      <p className="px-5 text-sm text-center lg:text-xl">
        Multiverse Yield © 2023 | All Rights Reserved | Privacy Policy |{" "}
      </p>
      <p>Terms of Service</p>
      <div className="flex items-center gap-5 mt-5 text-2xl">
        <BsMedium />
        <BsTwitter className=" text-[#45c1e7]" />
        <BsGithub />
        <BsDiscord className=" text-[#543fca]" />
      </div>
    </div>
  );
};

export default index;

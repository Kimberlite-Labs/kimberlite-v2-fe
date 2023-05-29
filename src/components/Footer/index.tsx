import { BsDiscord, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";

const index = () => {
  return (
    <div className="flex flex-col font-bold items-center justify-center w-[100%] h-[30vh] bg-[gray] ">
      <p className="px-5 text-sm text-center lg:text-xl">
        Kimberlite Labs © 2023 | All Rights Reserved
      </p>

      <div className="flex items-center gap-5 mt-5 text-2xl">
        <a
          href="https://discord.gg/wsZwhFqhRc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsDiscord className=" text-[#543fca]" />
        </a>
        <a
          href="https://twitter.com/KimberliteLabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter className=" text-[#45c1e7]" />
        </a>
        <a
          href="https://github.com/kimberlite-Labs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://kimberlite.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsMedium />
        </a>
      </div>
    </div>
  );
};

export default index;

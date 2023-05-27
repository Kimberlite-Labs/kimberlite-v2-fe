import { useEffect, useState } from "react";

import { useAccount, useWalletClient } from "wagmi";

import { useParams } from "react-router-dom";
import { IoCopy } from "react-icons/all";
import { toast } from "react-toastify";

import {
  isRegisteredUser,
  getUserData,
  getUserBonus,
  preRegister,
} from "../components/Preregistration/preRegistrationApi";
import { Web3Button } from "@web3modal/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { isAddress } from "ethers";
import Loading from "../components/Loading/loading";

// type RegisteredDisplayProps = {
//   Points?: number;
//   TeamSize?: number;
//   refLink?: string;
//   DRef?: number;
// };

const isValidWalletAddres = (address: string) => {
  try {
    if (isAddress(address)) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const ConnectWallet = () => {
  const [loading, setLoading] = useState(false);
  const { isConnected, address } = useAccount();
  const { upline: uplineAddressFromParams } = useParams();
  const [uplineAddress, setUplineAddress] = useState("");
  const [Hunter, setHunter] = useState(false);
  const { data: walletClient } = useWalletClient();
  const [Bonus, setBonus] = useState(0);
  const [userData, setUserData] = useState<
    { teamSize: number; directRefs: number } | undefined
  >();


  // const [uplineReg, setRegUpline] = useState();

  useEffect(() => {
    if (uplineAddressFromParams) {
      setUplineAddress(uplineAddressFromParams);
    }
  }, [uplineAddressFromParams]);

  async function Register() {
    if (uplineAddress && isValidWalletAddres(uplineAddress)) {
      try {
        const register = await preRegister(walletClient, uplineAddress);

        if (register) {
          const Bonus = await getUserBonus(address);
          const Team = await getUserData(address);

          setBonus(Bonus);
          setUserData(Team);
          setHunter(true);
        }
      } catch (e) {
        return;
      }
    }
  }

  // useEffect(() => {
  //   async function checkUpline() {
      // const isInputUplineRegistered = await isRegisteredUser(uplineAddress);

      /* if (!isInputUplineRegistered) {
        setUplineAddress("0xc9Fa763a37AaB4c8Fa647a88fCbb02db46704a8E"); // This is the fallback address
      }
 */
      // setRegUpline(isInputUplineRegistered);
  //   }

  //   checkUpline();
  // }, [uplineAddress]);

  useEffect(() => {
    async function checkUser() {
      if (address) {
        setLoading(true);
        try {
          const userStatus = await isRegisteredUser(address);
          if (userStatus) {
            const Bonus = await getUserBonus(address);
            const Team = await getUserData(address);

            setBonus(Number(Bonus));
            setUserData(Team);
          }
          setHunter(userStatus);
        } catch (e) {
          console.error(e);
        }
        setLoading(false);
      }
    }
    checkUser();
  }, [address]);

  const copyToClipboard = () => {
    const link = `https://kimberlite.rocks/pre/${address}`;
    navigator.clipboard.writeText(link);
    toast.success("Copied");
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen pt-[200px] bg-black w-[100vw] items-centser h">
        <Loading />
      </div>
    ); // Render a loading state
  }
  return (
    <>
      <main className="relative flex-col items-center h-auto gap-4 overflow-hidden bg-black">
        <Navbar />
        <div className="flex flex-col  items-center justify-center  w-[100%] ">
          <div className="z-50 flex items-center justify-end gap-5 mt-10 ">
            <Web3Button />
          </div>
        </div>

        <div>
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
          {/* <img
            src="/elip/elip1.svg"
            alt=""
            className="  absolute rotate-90 md:w-[50%] w-[100%] top-0 left-0 animate-bounce"
          /> */}
        </div>
        {isConnected ? (
          Hunter ? (
            <div className="flex flex-col flex-grow h-auto gap-10 between item-center">
              <p className="mt-5 md:text-5xl font-bold mx-auto text-xl shrink-0 text-[#F04B08] text-center ">
                Welcome, Hunter!!!
              </p>
              <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:px-5">
                <div className="mt-6 text-lg mx-auto text-center max-w-[500px] text-white px-3 font-serif ">
                  <span className="text-2xl font-bold">Are you ready to earn rewards and climb the ranks?</span>
                  <br />
                  By growing your team and sharing your referral link, you can
                  earn up to 15% of your team's KLB income across five levels.
                  <br /> Don't miss out on this exciting opportunity to earn
                  rewards and make your mark in the Kimberlite ecosystem. Let's
                  get started today!
                </div>

                <div className="flex flex-col items-center justify-center gap-3 p-8 mx-auto text-white border-2 border-white rounded-md ring-gray-500 ring-2 bor ">
                  <p>KLB Balance: {Bonus} KLB</p>

                  <p>Direct Referrals : {Number(userData.directRefs)}</p>
                  <p>Team Size : {Number(userData.teamSize)}</p>
                </div>
              </div>
              <div className=" relative flex justify-center items-center flex-col gap-3 p-1 mx-auto text-white  w-[100%] ">
                <p className="text-[#F04B08] font-serif text-2xl">
                  Your Referral link :{" "}
                </p>
                <IoCopy
                  onClick={copyToClipboard}
                  size={30}
                  className="absolute right-[10px] z-[100px] lg:right-[330px] text-white hover:text-orange-300"
                />
                <p className="p-4 mt-3 overflow-auto text-sm border rounded-2xl md:w-fit w-[90%] mb-2">
                  {`https://kimberlite.rocks/pre/${address}`}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col w-full h-screen gap-10">
                <p className="mt-10 text-2xl max-w-3xl mx-auto text-[#fff] md:text-3xl text-center md:max-w-[400px]">
                  Pre-register for early access to our strategy vaults.{" "}
                </p>{" "}
                <label
                  htmlFor="upline"
                  className="pr-2 text-xl border-orange-400"
                >
                  Refferal Address:{" "}
                </label>
                <input
                  className="border z-50 w-[80%] md:w-[70%] mx-auto  rounded-md border-orange-400 focus:border-orange-500 p-4"
                  id="upline"
                  placeholder="0x..."
                  value={uplineAddress}
                  onChange={(e: any) => {
                    setUplineAddress(e.target.value);
                  }}
                />
                {/* {!uplineReg && uplineAddress && (
                  <p
                    className="text-[20px] text-center text-cyan-50 mt-5
                    pb-2"
                  >
                    Invalid <span className="text-red-700 "> Registered </span>
                    address. ask for a Valid referral address from our{" "}
                    <a
                      href="https://discord.gg/wsZwhFqhRc"
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-500 cursor-pointer"
                    >
                      discord server
                    </a>
                  </p>
                )} */}
                {!isValidWalletAddres(uplineAddress) ? (
                  <p className="text-[20px] text-center text-cyan-50 py-5">
                    Note: You need a vaild address. to register. 
                  </p>
                ) : null}
                <button
                  onClick={() => {
                    Register();
                  }}
                  className="z-50 flex p-5 mx-auto font-bold bg-blue-500 rounded-lg t-5 wp-3 ustify-center zitems-center btn_primary ring-2 ring-white text-slate-50 w-fit"
                  disabled={!isAddress(address)}
                >
                  Register
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="h-screen min-h-screen font-bold overscroll-none">
            <div className="flex justify-center items-center mt-[50px] flex-col gap-10">
              {" "}
              <p className=" hidden lg:inline-block text-5xl text-[#F04B08] md:text-8xl text-center">
                Hello Gem Hunter{" "}
              </p>{" "}
              <p className="lg:hidden text-5xl text-[#F04B08] md:text-8xl text-center">
                Hello Gem <br />
                Hunter{" "}
              </p>{" "}
              <p className=" hidden lg:inline-block text-4xl text-[#F04B08] md:text-6xl text-center">
                You are at Kimberlite{" "}
              </p>{" "}
              <p className=" lg:hidden text-4xl text-[#F04B08] md:text-6xl text-center">
                You are at <br />
                Kimberlite{" "}
              </p>{" "}
              <p className=" text-2xl max-w-3xl text-[#fff] md:text-3xl text-center md:max-w-[400px]">
                Pre-register for early access to our strategy vaults.{" "}
              </p>{" "}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ConnectWallet;

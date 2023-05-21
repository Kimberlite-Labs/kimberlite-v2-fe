import { useEffect, useState } from "react";

import { useAccount, useWalletClient } from "wagmi";

import { useParams } from "react-router-dom";

import {
  isRegisteredUser,
  getUserData,
  getUserBonus,
  preRegister,
} from "../components/Preregistration/preRegistrationApi";
import { Web3Button } from "@web3modal/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { isAddress, toNumber } from "ethers";

type RegisteredDisplayProps = {
  Points?: number;
  TeamSize?: number;
  refLink?: string;
  DRef?: number;
};

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
  const { isConnected, address } = useAccount();
  const { upline: uplineAddressFromParams } = useParams();
  const [uplineAddress, setUplineAddress] = useState("");
  const [Hunter, setHunter] = useState(false);
  const { data: walletClient } = useWalletClient();
  const [Bonus, setBonus] = useState(0);
  const [userData, setUserData] = useState<
    { teamSize: number; directRefs: number } | undefined
  >();

  const [uplineReg, setRegUpline] = useState();

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
        console.log(e);
      }
    }
  }

  useEffect(() => {
    async function checkUpline() {
      const isInputUplineRegistered = await isRegisteredUser(uplineAddress);

      /* if (!isInputUplineRegistered) {
        setUplineAddress("0xc9Fa763a37AaB4c8Fa647a88fCbb02db46704a8E"); // This is the fallback address
      }
 */
      setRegUpline(isInputUplineRegistered);
    }

    checkUpline();
  }, [uplineAddress]);

  useEffect(() => {
    async function checkUser() {
      if (address) {
        try {
          const userStatus = await isRegisteredUser(address);
          if (userStatus) {
            const Bonus = await getUserBonus(address);
            const Team = await getUserData(address);
            console.log(Number(Bonus));

            setBonus(Number(Bonus));
            setUserData(Team);
          }
          setHunter(userStatus);
        } catch (e) {
          console.error(e);
        }
      }
    }
    checkUser();
  }, [address]);

  return (
    <>
      <main className="flex-col items-center justify-between overflow-hidden bg-black bg-bg-elip  w-[100%] ">
        <Navbar />
        <div className="flex flex-col  items-center justify-center  w-[100%] ">
          <div className="flex items-center justify-end gap-5 mt-10 ">
            <Web3Button />
          </div>
        </div>
        {isConnected ? (
          Hunter ? (
            <div className="flex flex-col gap-10 between item-center h-fit">
              <div className="flex flex-col items-start justify-start md:px-5">
                <p className="mt-5 md:text-3xl mx-auto text-xl shrink-0 text-[#F04B08] text-center ">
                  Welcome, Hunter!!!
                </p>
                <p className="mt-6 text-lg mx-auto max-w-[500px] text-white px-3 font-serif ">
                  Are you ready to earn rewards and climb the ranks? By growing
                  your team and sharing your referral link, you can earn up to
                  15% of your team's KLB income across five levels. Don't miss
                  out on this exciting opportunity to earn rewards and make your
                  mark in the Kimberlite ecosystem. Let's get started today!
                </p>

                <div className="flex flex-col items-center justify-center gap-3 m-5 mx-auto text-white ">
                  <p>KLB Balance: {Bonus} KLB</p>

                  <p>Direct Referrals : {Number(userData.directRefs)}</p>
                  <p>Team Size : {Number(userData.teamSize)}</p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col gap-3 p-1 mx-auto text-white  w-[100%] ">
                <p className="text-orange-400">Your Referral link : </p>
                <p className="p-4 mt-3 overflow-auto text-sm border rounded-2xl md:w-fit w-[90%] mb-2">
                  {`https://kimberlite.rocks/pre/${address}`}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="flex flex-col items-stretch w-full py-2">
                <label
                  htmlFor="upline"
                  className="pr-2 text-xl border-orange-400"
                >
                  Refferal Address:{" "}
                </label>
                <input
                  className="border w-[80%] md:w-[70%] mx-auto mt-10 rounded-md border-orange-400 focus:border-orange-500 p-4"
                  id="upline"
                  placeholder="0x..."
                  value={uplineAddress}
                  onChange={(e: any) => {
                    setUplineAddress(e.target.value);
                  }}
                />
                {!uplineReg && uplineAddress && (
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
                )}
                {!isValidWalletAddres(uplineAddress) && (
                  <p className="text-[20px] text-center text-cyan-50 py-5">
                    Note: You need a refferal address. If you were not reffered,
                    ask from our{" "}
                    <a
                      href="https://discord.gg/wsZwhFqhRc"
                      target="_blank"
                      rel="noreferrer"
                      className="text-orange-500 cursor-pointer"
                    >
                      discord server
                    </a>
                  </p>
                )}
              </div>

              <button
                onClick={() => {
                  Register();
                }}
                className="flex items-center justify-center p-3 mt-5 font-bold bg-blue-500 rounded-lg btn_primary ring-2 ring-white text-slate-50"
                disabled={!isValidWalletAddres(uplineAddress)}
              >
                Register
              </button>
            </div>
          )
        ) : (
          <div className="h-screen ">
            <div className="flex justify-center items-center mt-[50px] flex-col gap-8">
              {" "}
              <p className=" text-2xl text-[#F04B08] md:text-5xl text-center">
                Hello Gem Hunter You are at Kimberlite{" "}
              </p>{" "}
              <p className=" text-2xl text-[#F04B08] md:text-5xl text-center">
                You are at Kimberlite{" "}
              </p>{" "}
              <p className=" text-lg text-[#fff] md:text-3xl text-center">
                Your Gateway to AI-Driven Multichain High Yield Aggregation{" "}
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

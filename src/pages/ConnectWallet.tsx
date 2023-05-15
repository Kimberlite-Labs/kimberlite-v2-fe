import { Web3Button } from "@web3modal/react";
import Navbar from "../components/Navbar/ConnectNavbar";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}
// const contractABI = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_upline",
//         type: "address",
//       },
//     ],
//     name: "preRegister",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// const contractAddress = "0x163efB16aAD59Ae214956DbF2B9F7Ef880005559";

const ConnetWallet = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected && address) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const balance = await provider.getBalance(address);
        setBalance(ethers.formatUnits(balance));
      }
    };

    fetchBalance();
  }, [isConnected, address]);

  return (
    <div className="flex-col items-center justify-between min-h-screen overflow-hidden bg-black ">
      <div className=" w-screen absolute top-0 left-0 object-cover min-w-full h-[100vh] bg-repeat-y bg-bg-elip">
        <Navbar />
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-end gap-5 mt-10 ">
            <Web3Button />
          </div>
          {isConnected ? (
            <div className="">
              <p className="mt-10 md:text-5xl text-2xl shrink-0 text-[#F04B08] text-center ">
                Welcome, Hunter!!!
              </p>
              <p className="mx-auto mt-10 text-xl max-w-[700px] text-white px-3 text-center">
                Are you ready to earn rewards and climb the ranks? By growing
                your team and sharing your referral link, you can earn up to 15%
                of your team's KLB income across five levels. Don't miss out on
                this exciting opportunity to earn rewards and make your mark in
                the Kimberlite ecosystem. Let's get started today!
              </p>

              <div className="flex flex-col items-center justify-center gap-3 mt-10 text-white ">
                {balance ? (
                  <p>KLB Balance: {balance} KLB</p>
                ) : (
                  <p>Loading balance...</p>
                )}
                <p>Direct Referrals : 0</p>
                <p>Team Size : 0</p>
              </div>
              <div className="flex flex-col gap-3 m-2 text-white ">
                <p>Your Referral link : </p>
                <p className="p-3 border rounded-2xl ">
                  https://kimberlite.rocks/pre/OxE49B01....caD26E
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-[100px] flex-col gap-8">
              <p className=" text-2xl text-[#F04B08] md:text-5xl text-center">
                Hello Gem Hunter You are at Kimberlite
              </p>
              <p className=" text-2xl text-[#F04B08] md:text-5xl text-center">
                {" "}
                You are at Kimberlite
              </p>
              <p className=" text-lg text-[#fff] md:text-3xl text-center">
                {" "}
                Your Gateway to AI-Driven Multichain High Yield Aggregation
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnetWallet;

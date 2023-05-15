import { Web3Button } from "@web3modal/react";
import Navbar from "../components/Navbar/ConnectNavbar";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
// import gemHunterWaitlistABI from "../ABI/gemHunterWaitlistABI.json";

declare global {
  interface Window {
    ethereum: any;
  }
}
const ConnetWallet = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);
  // const { setDefaultChain } = useWeb3Modal();

  // const contractAddress = "0x163efB16aAD59Ae214956DbF2B9F7Ef880005559";

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
            <>
              <p className="mt-10 text-5xl text-[#F04B08] ">
                Welcome, Hunter!!!
              </p>
              <p className="mx-auto mt-10 text-xl max-w-[700px] text-white ">
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
              <div className="flex flex-col gap-3 text-white ">
                <p>Your Referral link : </p>
                <p className="p-3 border rounded-2xl">
                  https://kimberlite.rocks/pre/OxE49B01....caD26E
                </p>
              </div>
              <p className="mt-10 text-2xl text-white ">{`Disconnect ${address}`}</p>
            </>
          ) : (
            <div className="flex justify-center items-center mt-[100px] flex-col">
              <img
                className="w-[100%]"
                src="/frame/cwFrame1.svg"
                alt="connectWallet"
                width={1000}
                height={1000}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnetWallet;

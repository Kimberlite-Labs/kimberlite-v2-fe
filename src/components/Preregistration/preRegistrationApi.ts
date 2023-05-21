import { ethers } from "ethers";
import { CA, ABI } from "../../ABI/GemHunterWaitlistABI";

const provider = new ethers.BrowserProvider(window.ethereum);

const getCA = () => {
  return new ethers.Contract(CA, ABI, provider);
};

export async function isRegisteredUser(address) {
  const contract = getCA();

  try {
    const isRegistered = await contract.isRegistered(address);

    return isRegistered;
  } catch (e) {
    return;
  }
}

export async function getUserData(address: any | ethers.Overrides) {
  const contract = getCA();

  try {
    const userData = await contract.userData(address);

    return userData;
  } catch (e) {
    return;
  }
}

export async function getUserBonus(address: any | ethers.Overrides) {
  const contract = getCA();
  try {
    const userBonus = await contract.UserBonus(address);
    return userBonus;
  } catch (e) {
    return;
  }
}

export async function preRegister(
  walletClient,
  upline: any | ethers.Overrides
) {
  const contract = new ethers.Contract(CA, ABI, walletClient);

  try {
    const preReg = await contract.preRegister(upline);

    return preReg;
  } catch (e) {
    if (e.message.includes("user rejected transaction")) {
      console.error("Error: Please confirm transaction");
    } else {
      console.log(e);
    }
  }
}

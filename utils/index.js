import { ethers } from "ethers";
import identiFi from "./identiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xE86372cA334121b356F243537b4FAF1Cd52db67D",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};

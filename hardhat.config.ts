import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


//get the private key from the environment
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "";
const infuraId = process.env.SEPOLIA_INFURA_APIKEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraId}`,
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  
};

export default config;

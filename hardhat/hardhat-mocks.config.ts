import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers:[
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999
          }
        }
      },
      {
        version: "0.4.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      }
    ]
  },
  paths: {
    root: "../packages/mock-contracts/",
    sources: "./contracts", 
    cache: "../../hardhat/cache",
    artifacts: "../../hardhat/artifacts"
  }
};

export default config;

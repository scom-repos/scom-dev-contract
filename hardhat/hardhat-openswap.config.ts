import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers:[
    {
      version: "0.6.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        }
      }
    }
    ],
    overrides:{
      "contracts/restricted/OSWAP_RestrictedPair1.sol": {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 45000,
          }
        }
      },
      "contracts/restricted/OSWAP_RestrictedPair2.sol": {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 45000,
          }
        }
      },
      "contracts/restricted/OSWAP_RestrictedPairCreator1.sol": {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 45000,
          }
        }
      },
      "contracts/router/OSWAP_HybridRouter2.sol": {
        version: "0.6.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 30000,
          }
        }
      }
    }
  },
  paths: {
    root: "./openswap",
    sources: "./contracts",
    artifacts: "../artifacts",
    cache: "../cache"
  }
};

export default config;

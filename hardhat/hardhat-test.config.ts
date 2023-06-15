/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "@nomiclabs/hardhat-web3";
// import "solidity-coverage";

module.exports = {
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
      }
    ],
    overrides:{
      "test/contracts/WETH9.sol": {
        version: "0.4.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      }
    }
  },
  paths: {
    root: "../",
    sources: "./test/contracts", 
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts"
  }
};
// npx hardhat --config ./hardhat-test.config.ts compile

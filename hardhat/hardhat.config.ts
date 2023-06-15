/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "solidity-coverage";

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
    ]
  },
  paths: {
    root: "../",
    sources: "./contracts", 
    tests: "./test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts"
  },
  mocha: {
    timeout: 1000000
  }
};

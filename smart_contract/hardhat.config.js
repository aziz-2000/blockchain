require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');


module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/TnHNKW29VlLgEjdS4FAeGm7QBfnBePyT',
      accounts: ['c6ee86772c4bc478e3118846cdf0d6b0ea5c1693f804460f2aa57876b9238449'],
    },
  },
};


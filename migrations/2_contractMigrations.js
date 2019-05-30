const SendEther = artifacts.require("sendEther");

module.exports = function(deployer) {
  deployer.deploy(SendEther);
};

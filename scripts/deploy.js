const hre = require("hardhat");

async function main() {
  const MyNFT= await hre.ethers.getContractFactory("MyNFT")
  const mynft = await MyNFT.deploy("0x58EA6F28AD457F5c71E21E91E438D2116ee365c3");

  await skyman.waitForDeployment()
  console.log("Назание контракта: ", await mynft.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


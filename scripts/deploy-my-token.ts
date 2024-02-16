import { ethers } from "hardhat";

const main = async () => {
  const [owner, otherAccount] = await ethers.getSigners();

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy("MyToken", "MTK");
  await myToken.waitForDeployment();

  console.log(`owner address: ${owner.address}`);
  console.log(`myToken address: ${await myToken.getAddress()}`);
  console.log(`myToken owner: ${await myToken.owner()}`);
};

main();

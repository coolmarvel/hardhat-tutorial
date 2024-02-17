import { ethers } from "hardhat";

const main = async () => {
  const [owner, otherAccount] = await ethers.getSigners();
  const MyMultiToken = await ethers.getContractFactory("MyMultiToken");
  const myMultiToken = await MyMultiToken.deploy(owner);

  console.log(`owner address: ${owner.address}`);
  console.log(`myMultiToken address: ${await myMultiToken.getAddress()}`);
  console.log(`myMultiToken owner: ${await myMultiToken.owner()}`);
};
main();

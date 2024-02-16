import { ethers } from "hardhat";

const main = async () => {
  const [owner, otherAccount] = await ethers.getSigners();

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNft = await MyNFT.deploy("MyNFT", "MNT");
  await myNft.waitForDeployment();

  console.log(`owner address: ${owner.address}`);
  console.log(`myNft address: ${await myNft.getAddress()}`);
  console.log(`myNft owner: ${await myNft.owner()}`);
};
main();

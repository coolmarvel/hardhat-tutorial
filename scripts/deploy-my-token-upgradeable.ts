import { ethers, upgrades } from "hardhat";

const main = async () => {
  const [owner, otherAccount] = await ethers.getSigners();

  const MyTokenUpgradeable = await ethers.getContractFactory("MyTokenUpgradeable");
  const myTokenUpgradeable = await upgrades.deployProxy(MyTokenUpgradeable, ["MyTokenUpgradeable", "MTKU", owner.address]);
  await myTokenUpgradeable.waitForDeployment();

  console.log(`owner address: ${owner.address}`);
  console.log(`myTokenUpgradeable address: ${await myTokenUpgradeable.getAddress()}`);
  console.log(`myTokenUpgradeable owner: ${await myTokenUpgradeable.owner()}`);

  console.log(`contract name: ${await myTokenUpgradeable.name()}`);
  console.log(`contract symbol: ${await myTokenUpgradeable.symbol()}`);
};
main();

import { ethers, upgrades } from "hardhat";

const main = async () => {
  const [owner, otherAccount] = await ethers.getSigners();

  const MyTokenUpgradeable = await ethers.getContractFactory("MyTokenUpgradeableV1");
  const myTokenUpgradeable = await upgrades.deployProxy(MyTokenUpgradeable, ["MyTokenUpgradeable", "MTKU", owner.address]);
  await myTokenUpgradeable.waitForDeployment();

  const MyTokenUpgradeableV2 = await ethers.getContractFactory("MyTokenUpgradeableV2");
  const myTokenUpgradeableV2 = await upgrades.upgradeProxy(await myTokenUpgradeable.getAddress(), MyTokenUpgradeableV2);

  await myTokenUpgradeableV2.waitForDeployment();

  console.log("myTokenUpgradeableV2 address: ", await myTokenUpgradeableV2.getAddress());
  console.log("--------------------------------------------------------------");
  console.log(`newVariable: ${await myTokenUpgradeableV2.newVariable()}`);
  console.log(`Set newVariable`);
  await myTokenUpgradeableV2.setNewVariable(1125);
  console.log("--------------------------------------------------------------");

  console.log(`Get newVariable: ${await myTokenUpgradeableV2.getNewVariable()}`);
};
main();

import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Byz = await ethers.getContractFactory("Byz");
    const byzToken = await Byz.deploy();

    await byzToken.waitForDeployment();

    // Access the address property from the deployment results
    console.log("ERC20 contract deployed to:", byzToken.target);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

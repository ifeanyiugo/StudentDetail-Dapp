const hre = require("hardhat");

async function main() {
  const studentDetailContract = await hre.ethers.deployContract(
    "StudentDetail"
  );

  await studentDetailContract.waitForDeployment();

  console.log(
    ` studentDetailContract deployed to ${studentDetailContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

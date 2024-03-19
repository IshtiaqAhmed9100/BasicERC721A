const { ethers } = require("hardhat");
const { run } = require("hardhat");
async function verify(address, constructorArguments) {
    console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
    await run("verify:verify", {
        address,
        constructorArguments
    })
}
async function main() {
//   let owner =  '0x12eF0F1C99D8FD50fFd37cCd12B09Ef7f1213269';
   
//   const BasicERC721A = await ethers.deployContract( 'BasicERC721A' , []);

//     console.log("Deploying BasicERC721A...");
//     await BasicERC721A.waitForDeployment()

//     console.log("BasicERC721A deployed to:", BasicERC721A.target);

//     await new Promise(resolve => setTimeout(resolve, 10000));
    verify('0x999A229BCa057F4f58AB2cD2d3DCb4d306ab878f', [])
}
main()
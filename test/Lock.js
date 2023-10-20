const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  let owner;
  let MyNFT;
  let name = "MyNFT";  // Define the name
  let symbol = "CAQ";  // Define the symbol

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    MyNFT = await MyNFTFactory.deploy(name, symbol);
  });
  

  it("should have the correct name and symbol", async function () {
    const name = await MyNFT.name();
    const symbol = await MyNFT.symbol();

    expect(name).to.equal("MyNFT");
    expect(symbol).to.equal("CAQ");
  });

  // Corrected test
  it("should allow the owner to mint a token with a URI", async function () {
    const tokenURI = "https://example.com/token/1";
    const tokenId = 0;

    // Mint the token with URI using mintWithURI
    await MyNFT.connect(owner).mintWithURI(owner.address, tokenId, tokenURI);

    // Check ownership
    const tokenOwner = await MyNFT.ownerOf(tokenId);
    expect(tokenOwner).to.equal(owner.address);

    // Check token URI
    const retrievedTokenURI = await MyNFT.tokenURI(tokenId);
    expect(retrievedTokenURI).to.equal(tokenURI);
})});

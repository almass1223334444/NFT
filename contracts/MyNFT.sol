// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    // Mint a token with a URI
    function mintWithURI(address to, uint256 tokenId, string memory tokenURI) public onlyOwner {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}

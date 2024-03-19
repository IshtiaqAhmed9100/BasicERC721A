
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;


import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import {ERC721A} from "erc721a/contracts/ERC721A.sol";


contract BasicERC721A is ERC721A, Ownable {

    constructor() Ownable(msg.sender) ERC721A("BasicERC721A", "B721A") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
}
}
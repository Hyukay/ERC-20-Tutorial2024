//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';


contract Byz is ERC20 {
    constructor() ERC20("Byz", "BYZ") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}
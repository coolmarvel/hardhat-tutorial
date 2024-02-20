// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "./MyTokenUpgradeableV1.sol";

contract MyTokenUpgradeableV2 is MyTokenUpgradeableV1 {
  uint256 public newVariable;

  function initializeV2(uint256 _newVariable) public initializer {
    newVariable = _newVariable;
  }

  function setNewVariable(uint256 _newVariable) public {
    newVariable = _newVariable;
  }

  function getNewVariable() public view returns (uint256) {
    return newVariable;
  }
}

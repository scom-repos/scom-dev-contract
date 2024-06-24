// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NodeNFT is Authorization, ReentrancyGuard, ERC721Enumerable {
    using SafeERC20 for IERC20;

    event Stake(address indexed who, uint256 indexed tokenId);
    event AddStakes(address indexed who, uint256 indexed tokenId);
    event Unstake(address indexed who, uint256 indexed tokenId);
    event Attribute(uint256 indexed tokenId, uint256 attribute);
    event SetBaseURI(string baseURI);
    event SetStakeRequired(uint256 stakeRequired);
    event SetProtocolFee(uint256 protocolFee);
    event CustomAttribute(uint256 indexed tokenId, uint256 attribute);

    string public baseURI;
    address public immutable manager; 
    uint256 public stakeRequired;
    uint256 public protocolFee;

    uint256 public counter;
    mapping(uint256 => uint256) public creationDate;
    mapping(uint256 => uint256) public destoryDate;
    mapping(uint256 => uint256) public lastStakeDate;

    modifier onlyManager() {
        require(msg.sender == manager, "not from manager");
        _;
    }
    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory __baseURI,
        address _manager,
        uint256 _stakeRequired,
        uint256 _protocolFee
    ) ERC721(_name, _symbol) {
        baseURI = __baseURI;
        manager = _manager;
        stakeRequired = _stakeRequired;
        protocolFee = _protocolFee;
        emit SetBaseURI(baseURI);
        emit SetStakeRequired(_stakeRequired);
        emit SetProtocolFee(_protocolFee);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory __baseURI) external onlyOwner {
        baseURI = __baseURI;
        emit SetBaseURI(baseURI);
    }
    function setStakeRequired(uint256 _stakeRequired) external onlyOwner {
        stakeRequired = _stakeRequired;
        emit SetStakeRequired(_stakeRequired);
    }
    function setProtocolFee(uint256 _protocolFee) external onlyOwner {
        protocolFee = _protocolFee;
        emit SetProtocolFee(protocolFee);
    }

    function mint(address to) external onlyManager returns (uint256 tokenId) {
        tokenId = ++counter;

        creationDate[tokenId] = block.timestamp;
        lastStakeDate[tokenId] = block.timestamp;
        _safeMint(to, tokenId);
        emit Stake(to, tokenId);
    }
    function addStakes(address to, uint256 tokenId) external onlyManager {
        require(ownerOf(tokenId) == to, "not from token owner");
        lastStakeDate[tokenId] = block.timestamp;
        emit AddStakes(to, tokenId);
    }
    function burn(address from, uint256 tokenId) external onlyManager {
        require(_isApprovedOrOwner(from, tokenId), "Not authorized");
        _burn(tokenId);
        destoryDate[tokenId] = block.timestamp;
        emit Unstake(from, tokenId);
    }
}
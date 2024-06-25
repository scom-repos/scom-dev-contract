// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.13;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./NodeNFT.sol";
import "./Scom.sol";

contract NFTManager is Authorization, ReentrancyGuard {
    using SafeERC20 for Scom;

    event NewNFT(NodeNFT indexed nft, uint256 stakes, uint256 protocolFee, bool enabled);
    event SetProtocolFeeTo(address protocolFeeTo);
    event Mint(address indexed minter, NodeNFT indexed nft, uint256 indexed tokenId, uint256 stakes, uint256 protocolFee);
    event AddStakes(address indexed minter, NodeNFT indexed nft, uint256 indexed tokenId, uint256 stakes);
    event Burn(address indexed burner, NodeNFT indexed nft, uint256 indexed tokenId);
    event Pause(NodeNFT indexed nft);
    event Resume(NodeNFT indexed nft);

    struct NftInfo {
        NodeNFT nft;
        bytes32 desc;
        uint256 stakes;
        uint256 protocolFee;
        bool paused;
    }

    Scom public immutable scom;
    address public protocolFeeTo;
    uint256 public protocolFeeBalance;
    NftInfo[] public nfts;


    mapping(NodeNFT => uint256) public invNfts; // invNfts[nft] = nfts_idx
    mapping(address => mapping(NodeNFT => mapping(uint256 => uint256))) public staked; // staked[user][token][tokenId] = staked
    // mapping(NodeNFT => bool) public isPaused;

    constructor(Scom _scom, address _protocolFeeTo) {
        scom = _scom;
        protocolFeeTo = _protocolFeeTo;
        emit SetProtocolFeeTo(_protocolFeeTo);
    }
    // function setMinimumStake(uint256 _minimumStake) external onlyOwner {
    //     require(_minimumStake > protocolFee, "Invalid minStake/protocolFee");
    //     minimumStake = _minimumStake;
    //     emit MinimumStake(minimumStake);
    // }
    function nftsLength() external view returns (uint256 length) {
        length = nfts.length;
    }
    function getNfts(uint256 start, uint256 length) external view returns (NftInfo[] memory _nfts) {
        if (start < nfts.length) {
            if (start + length > nfts.length) {
                length = nfts.length - start;
            }
            _nfts = new NftInfo[](length);
            for (uint256 i ; i < length ; i++) {
                _nfts[i] = nfts[i + start];
            }
        }
    }

    function setProtocolFeeTo(address _protocolFeeTo) external onlyOwner {
        // require(minimumStake > _protocolFee, "Invalid minStake/protocolFee");
        require(_protocolFeeTo != address(0), "Invalid protocolFee/FeeTo");
        protocolFeeTo = _protocolFeeTo;
        emit SetProtocolFeeTo(protocolFeeTo);
    }

    function addNft(NodeNFT nft, bytes32 desc, uint256 stakes,  uint256 protocolFee, bool enabled) auth external {
        require(nfts.length == 0 || nfts[invNfts[nft]].nft != nft, "nft exists");
        uint256 len = nfts.length;
        nfts.push(NftInfo({
            nft: nft, desc: desc, stakes: stakes, protocolFee: protocolFee, paused: !enabled
        }));
        invNfts[nft] = len;
        emit NewNFT(nft, protocolFee, stakes, enabled);
    }
    function pauseNFT(NodeNFT nft) auth external {
        require(nfts.length > 0);
        NftInfo storage _nft = nfts[invNfts[nft]];
        require(_nft.nft == nft, "nft not exists");
        require(!_nft.paused, "NFT already paused");
        _nft.paused = true;
        emit Pause(nft);
    }
    function resumeNFT(NodeNFT nft) auth external {
        require(nfts.length > 0);
        NftInfo storage _nft = nfts[invNfts[nft]];
        require(_nft.nft == nft, "nft not exists");
        require(_nft.paused, "NFT not paused");
        _nft.paused = false;
        emit Resume(nft);
    }

    function mint(NodeNFT nft) external nonReentrant returns (uint256 tokenId) {
        require(nfts.length > 0);
        NftInfo storage _nft = nfts[invNfts[nft]];
        require(_nft.nft == nft, "nft not exists");
        require(!_nft.paused, "NFT paused");

        scom.safeTransferFrom(msg.sender, address(this), _nft.stakes + _nft.protocolFee);
        tokenId = nft.mint(msg.sender);

        staked[msg.sender][nft][tokenId] = _nft.stakes;
        protocolFeeBalance += _nft.protocolFee;

        emit Mint(msg.sender, nft, tokenId, _nft.stakes, _nft.protocolFee);
    }
    function addStakes(NodeNFT nft, uint256 tokenId, uint256 stakes) external nonReentrant {
        require(nfts.length > 0);
        NftInfo storage _nft = nfts[invNfts[nft]];
        require(_nft.nft == nft, "nft not exists");
        require(!_nft.paused, "NFT paused");
        // require(msg.sender == nft.ownerOf(tokenId), "not from owner");

        nft.addStakes(msg.sender, tokenId);

        scom.safeTransferFrom(msg.sender, address(this), stakes);
        staked[msg.sender][nft][tokenId] += stakes;

        emit AddStakes(msg.sender, nft, tokenId, stakes);
    }

    function burn(NodeNFT nft, uint256 tokenId) external nonReentrant {
        require(nfts.length > 0);
        NftInfo storage _nft = nfts[invNfts[nft]];
        require(_nft.nft == nft, "nft not exists");
        require(msg.sender == nft.ownerOf(tokenId), "not from owner");

        uint256 amount = staked[msg.sender][nft][tokenId];
        delete staked[msg.sender][nft][tokenId];

        nft.burn(msg.sender, tokenId);
        scom.safeTransfer(msg.sender, amount);

        emit Burn(msg.sender, nft, tokenId);
    }
    function transferProtocolFee() external nonReentrant {
        if (protocolFeeTo != address(0) && protocolFeeBalance > 0) {
            uint256 _protocolFeeBalance = protocolFeeBalance;
            protocolFeeBalance = 0;
            scom.safeTransfer(protocolFeeTo, _protocolFeeBalance);
        }
    }
}
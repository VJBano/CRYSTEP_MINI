import { ethers } from "ethers";
import provider from "../config/infura";

// AAVE Lending Pool V2 Address
const AAVE_LENDING_POOL_ADDRESS = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";

// AAVE Contract ABI (Only necessary functions)
const AAVE_ABI = [
  "function getUserAccountData(address user) external view returns (uint256 totalCollateralETH, uint256 totalDebtETH, uint256 availableBorrowsETH, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)",
];

const lendingPoolContract = new ethers.Contract(
  AAVE_LENDING_POOL_ADDRESS,
  AAVE_ABI,
  provider
);

export const getAavePositions = async (walletAddress: string) => {
  try {
    const userAccountData = await lendingPoolContract.getUserAccountData(
      walletAddress
    );

    return {
      collateral_positions: [
        {
          asset: "ETH",
          amount: ethers.formatEther(userAccountData.totalCollateralETH),
        },
      ],
      borrowing_positions: [
        {
          asset: "ETH",
          amount: ethers.formatEther(userAccountData.totalDebtETH),
        },
      ],
    };
  } catch (error) {
    console.error("Error fetching AAVE positions:", error);
    throw new Error("Failed to fetch AAVE positions.");
  }
};

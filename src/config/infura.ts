import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || "";
const provider = new ethers.InfuraProvider("mainnet", INFURA_PROJECT_ID);

export default provider;

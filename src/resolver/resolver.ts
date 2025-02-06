import { getAavePositions } from "../service/aaveService";

export const resolvers = {
  getPositions: async ({ walletAddress }: { walletAddress: string }) => {
    return await getAavePositions(walletAddress);
  },
};

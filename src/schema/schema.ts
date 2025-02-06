import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { getAavePositions } from "../service/aaveService";

const PositionType = new GraphQLObjectType({
  name: "Position",
  fields: {
    asset: { type: GraphQLString },
    amount: { type: GraphQLString },
  },
});

const AaveDataType = new GraphQLObjectType({
  name: "AaveData",
  fields: {
    collateral_positions: { type: new GraphQLList(PositionType) },
    borrowing_positions: { type: new GraphQLList(PositionType) },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    aavePositions: {
      type: AaveDataType,
      args: { walletAddress: { type: GraphQLString } },
      async resolve(_, args) {
        return getAavePositions(args.walletAddress);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});

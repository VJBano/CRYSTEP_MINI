import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../schema/schema";

const router = express.Router();

router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default router;

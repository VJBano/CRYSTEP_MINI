import express from "express";
import dotenv from "dotenv";
import graphqlRoute from "./routes/gqlRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", graphqlRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/api/graphql`);
});

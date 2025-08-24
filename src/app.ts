import express from "express";
const app = express();
import dotenv from "dotenv";
import { Logger } from "./config/logger";
import { initDB } from "./config/database";
import cors from "cors";
dotenv.config();

const logger = new Logger("app-server");
const PORT = process.env.PORT ?? 8090;

const initServer = async () => {
  await initDB();
  app.use(express.json());
  app.use(cors());
};

try {
  logger.info("Initialising liquidns Processes");

  initServer().then(() => {
    app.listen(PORT, () => {
      logger.info("liquidns SERVER LIVE ON PORT 8090 🚀🚀🚀🚀");
    });
  });
} catch (error) {
  logger.error("Failed to initialise liquidns processes", error);
  process.exit(1);
}

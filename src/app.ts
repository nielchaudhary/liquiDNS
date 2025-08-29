import express from "express";
const app = express();
import dotenv from "dotenv";
import { Logger } from "./config/logger";
import { initDB } from "./config/database";
import cors from "cors";
import { getErrorDetails } from "./config/error";
import { domainRouter } from "./domain/router";
dotenv.config();

const logger = new Logger("app");
const PORT = process.env.PORT ?? 8090;

/**
 * Initializes the server:
 * - Connects to the database
 * - Applies global middlewares (JSON, CORS)
 * - Registers domain router
 *
 * @returns {Promise<void>} Resolves once initialization is complete
 * @throws Will throw an error if database connection fails
 */

const initServer = async (): Promise<void> => {
  await initDB();
  app.use(express.json());
  app.use(cors());
  app.use(domainRouter[0], domainRouter[1]);
};

try {
  initServer()
    .then(() => {
      app.listen(PORT, () => {
        logger.info("liquidns SERVER LIVE ON PORT 8090 🚀");
      });
    })
    .catch((error) => {
      logger.error(
        "Failed to initialise liquidns processes",
        getErrorDetails(error)
      );
      process.exit(1);
    });
} catch (error) {
  logger.error(
    "Unexpected synchronous error while starting server",
    getErrorDetails(error)
  );
  process.exit(1);
}

process.on("SIGINT", () => {
  logger.error("SIGINT received. Shutting down gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.error("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

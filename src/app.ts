import express from "express";
const app = express();
import dotenv from "dotenv";
import { Logger } from "./config/logger";
dotenv.config();

const logger = new Logger("app-server");

const PORT = process.env.PORT ?? 8090;

app.listen(PORT, () => {
  logger.info("liquidns SERVER LIVE ON PORT 8090");
});

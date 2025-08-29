import { Request, Response } from "express";
import { getErrorDetails } from "../../config/error";
import { Logger } from "../../config/logger";

const logger = new Logger("get-domain");

/* 
https://domainr.com/docs/api - using domainr api to get available domains
*/

export const getAvailableDomains = (req: Request, res: Response) => {
  try {
  } catch (error) {
    logger.error("Failed to get available domains", getErrorDetails(error));
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

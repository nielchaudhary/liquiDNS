import express, { Router } from "express";
import { getAvailableDomains } from "./api/get-domains";
const router = express.Router();

router.get("/get-domain", getAvailableDomains);

export const domainRouter: [string, Router] = ["/domain", router];

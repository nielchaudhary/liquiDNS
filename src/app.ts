import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 8090;

app.listen(PORT, () => {
  console.log("LiquiDNS SERVER LIVE ON PORT 8090");
});

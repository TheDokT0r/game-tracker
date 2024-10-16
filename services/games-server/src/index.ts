import express from "express";
import { dotenvConfig } from "service-assist";
dotenvConfig();

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.GAMES_SERVER_PORT, () => {
  console.log("Server started on port", process.env.GAMES_SERVER_PORT);
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createAccount } from "./Utils/userDB";
import { authenticateToken, generateAccessToken } from "./Utils/jwt";
import { dotenvConfig } from "service-assist";
dotenvConfig();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const response = await createAccount(username, email, password);

  if (response.acknowledged) {
    const token = generateAccessToken(email);
    res.status(200).json(token);
    return;
  }

  res.sendStatus(500);
});

app.post("/profile", authenticateToken, (req, res) => {});

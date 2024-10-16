import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createAccount, isValidLoginInfo } from "./Utils/userDB";
import {
  RequestWithUser,
  authenticateToken,
  generateAccessToken,
} from "./Utils/jwt";
import { dotenvConfig } from "service-assist";
dotenvConfig();

const { USERS_SERVER_PORT } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const response = await createAccount(username, email, password);

  if (response.acknowledged) {
    const token = generateAccessToken(response.insertedId);
    res.status(200).json(token);
    return;
  }

  res.sendStatus(500);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userId = await isValidLoginInfo(email, password);

  if (userId) {
    const token = generateAccessToken(userId);
    res.status(200).json(token);
    return;
  }

  res.sendStatus(401);
});

app.get("/profile", authenticateToken, (req, res) => {
  const { userId } = req as RequestWithUser;
  console.log(userId, res);
});

app.listen(USERS_SERVER_PORT, () => {
  console.log("Server started on port", USERS_SERVER_PORT);
});

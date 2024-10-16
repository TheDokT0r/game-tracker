import { MongoClient, ObjectId, Document, InsertOneResult } from "mongodb";
import { encryptPassword } from "./passwordCrypto";

export const createAccount = async (
  username: string,
  email: string,
  password: string
): Promise<InsertOneResult<Document>> => {
  const { MONGO_URI, USERS_DB } = process.env;

  const client = await MongoClient.connect(MONGO_URI);
  const basicUserProfile: UserData = {
    username,
    passwordHash: encryptPassword(password),
    email,
    games: [],
    _id: new ObjectId(),
  };

  return await client
    .db(USERS_DB)
    .collection("profiles")
    .insertOne(basicUserProfile);
};

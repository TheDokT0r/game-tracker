import {
  MongoClient,
  ObjectId,
  Document,
  InsertOneResult,
  Collection,
} from "mongodb";
import { comparePassword, encryptPassword } from "./passwordCrypto";

const INFO_COLLECTION = "basic_info";
const PROFILES_COLLECTION = "profiles";

const getCollection = async (
  collectionName: string
): Promise<{
  collection: Collection<Document>;
  client: MongoClient;
}> => {
  const { MONGO_URI, USERS_DB } = process.env;

  const client = await MongoClient.connect(MONGO_URI);
  const collection = client.db(USERS_DB).collection(collectionName);

  return { collection, client };
};

const createUserProfile = async (
  userId: ObjectId
): Promise<InsertOneResult<Document>> => {
  const { collection, client } = await getCollection(PROFILES_COLLECTION);

  const newProfile: UserPublicProfile = {
    _id: userId,
    gamesCollection: [],
    creationDate: new Date(),
    isOnline: false,
    lastLogin: new Date(),
    friends: [],
  };

  const response = await collection.insertOne(newProfile);
  await client.close();

  return response;
};

export const createAccount = async (
  username: string,
  email: string,
  password: string
): Promise<InsertOneResult<Document>> => {
  // Creates basic info page
  const { collection, client } = await getCollection(INFO_COLLECTION);

  const basicUserProfile: UserData = {
    _id: new ObjectId(),
    username,
    passwordHash: encryptPassword(password),
    email,
  };

  const response = await collection.insertOne(basicUserProfile);
  await client.close();

  await createUserProfile(response.insertedId);

  return response;
};

export const isValidLoginInfo = async (
  email: string,
  password: string
): Promise<ObjectId | null> => {
  const { collection, client } = await getCollection(INFO_COLLECTION);

  const profile = await collection.findOne<UserData>({ email });
  await client.close();
  if (!profile) {
    return null;
  }

  if (!comparePassword(password, profile.passwordHash)) {
    return null;
  }

  return profile._id;
};

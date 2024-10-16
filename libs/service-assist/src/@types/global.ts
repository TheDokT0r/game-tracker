import { ObjectId } from "mongodb";
declare global {
  interface GameData {
    _id: ObjectId;
    name: string;
    imageURL: string;
  }

  interface UserGameData {
    name: string;
    status: "planning" | "playing" | "played" | "scrapped";
    gameId: ObjectId;
    stars: 0 | 1 | 2 | 3 | 4 | 5;
    timeTookToBeat?: string;
  }

  interface UserData {
    _id: ObjectId;
    username: string;
    passwordHash: string;
    email: string;
    games: UserGameData[];
  }

  namespace NodeJS {
    interface ProcessEnv {
      GAME_SERVER_PORT: string;
      USERS_SERVER_PORT: string;
      MONGO_URI: string;
      USERS_DB: string;
      TOKEN_SECRET: string;
    }
  }
}
export {};

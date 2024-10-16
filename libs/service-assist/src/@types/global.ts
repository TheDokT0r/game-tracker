import { ObjectId } from "mongodb";
declare global {
  interface GameData {
    _id?: ObjectId;
    name: string;
    imageURL: string;
    status: "planning" | "playing" | "played" | "scrapped";
  }
  namespace NodeJS {
    interface ProcessEnv {
      GAME_SERVER_PORT: string;
    }
  }
}
export {};

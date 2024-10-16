import dotenv from "dotenv";

export const dotenvConfig = (path?: string) => {
  if (path) {
    dotenv.config({ path });
    return;
  }

  dotenv.config({ path: "../../.env" });
};

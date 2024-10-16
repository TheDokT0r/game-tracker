import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface RequestWithUser extends Request {
  user: string | jwt.JwtPayload;
}

const { TOKEN_SECRET } = process.env;

export const generateAccessToken = (email: string) => {
  return jwt.sign(email, TOKEN_SECRET, { expiresIn: "7d" });
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      if (user) {
        (req as RequestWithUser).user = user;
      }

      next();
    });
  } else {
    res.sendStatus(401);
  }
};

import { InferAttributes } from "sequelize";
import { User } from "../../models/User";

export {}

declare module 'express-session' {
  interface SessionData {
    user: Omit<InferAttributes<User>, 'password'>;
  }
}
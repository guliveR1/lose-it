import express from "express";
import { tryToAuthenticate } from "./src/database";
import bodyParser from 'body-parser';
import { userRouter } from "./src/routers/user.router";
import session from 'express-session';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(session({
  secret: 'dont tell anybody',
}));
app.use(cors());
app.use('/v1', [userRouter]);

app.listen(port, () => {
  tryToAuthenticate().then(() => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
});
import express, { Request, Response, NextFunction } from "express";
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
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.session.user || req.path.includes('/login') || req.path.includes('/register') || req.path.endsWith('/user')) {
    next();
  } else {
    res.status(401).send();
  }
});

app.use('/v1', [userRouter]);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(err);

  res.status(500).send('error');
});

app.listen(port, () => {
  tryToAuthenticate().then(() => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
});
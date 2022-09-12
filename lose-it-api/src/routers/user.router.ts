import { createHash } from "crypto";
import express, { Response, Request } from "express";
import { User } from "../models/User";

export const userRouter = express.Router();

const sha256 = (input: string) => createHash('sha256').update(input).digest('hex');

userRouter.get('/user', async (req: Request, res: Response) => {
  res.json(req.session.user);
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password: inputPassword } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    const { password: userPassword, ...restOfUser } = user.toJSON();

    if (sha256(inputPassword) === userPassword) {
        req.session.user = restOfUser;

        res.json({ success: true, user: restOfUser });
    } else {
      res.status(400).json({ success: false, error: 'WRONG_PASSWORD' })
    }
  } else {
    res.status(404).json({ success: false, error: 'USER_NOT_FOUND' })
  }
});

userRouter.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    await User.create({ email, password: sha256(password) });
    req.session.user = { email, onboarded: false };

    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'USER_EXISTS' })
  }
});
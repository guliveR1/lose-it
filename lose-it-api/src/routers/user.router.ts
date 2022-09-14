import { createHash } from "crypto";
import express, { Response, Request } from "express";
import { User } from "../models/User";

export const userRouter = express.Router();

const sha256 = (input: string) => createHash('sha256').update(input).digest('hex');

const calculateCalorieGoal = (user: User) => {
  let BMR = 0;

  // TODO: change to current weight and use real age
  if (user.gender === 'M') {
    BMR = 88.362 + (13.397 * user.initialWeight!) + (4.799 * user.height!) - (5.677 * 20);
  } else {
    BMR = 447.593 + (9.247 * user.initialWeight!) + (3.098 * user.height!) - (4.330 * 20);
  }

  return Math.round((1.2 * BMR) - 500);
}

userRouter.get('/user', async (req: Request, res: Response) => {
  if (req.session.user) {
    const calorieGoal = req.session.user ? calculateCalorieGoal(req.session.user as User) : 0;

    res.json({
      ...req.session.user,
      calorieGoal,
    });
  } else {
    res.json();
  }
});

userRouter.put('/user', async (req: Request, res: Response) => {
  const user = req.session.user;

  if (user) {
    const userData = req.body;

    await User.update({ ...userData, onboarded: true }, {
      where: {
        email: user.email
      }
    });
    req.session.user = { ...userData, onboarded: true };

    res.json('ok');
  } else {
    res.status(401).send('Unauthorized');
  }
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
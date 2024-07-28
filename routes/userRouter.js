import express from 'express';
import { handleHomePage } from '../controllers/user.js';
const userRouter = express.Router();
userRouter.get('/', handleHomePage);
export { userRouter };

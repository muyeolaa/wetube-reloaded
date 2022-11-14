import express from "express";
import { postEdit, logout, getEdit, see, startGithubLogin, finishGithubLogin,} from "../controlers/userController";
const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get(":id", see);
export default userRouter;
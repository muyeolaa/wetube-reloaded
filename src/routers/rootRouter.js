import express from "express";
import {getJoin,getLogin,postLogin, postJoin} from "../controlers/userController";
import {home,search} from "../controlers/videoController";

const rootRouter = express.Router();

rootRouter.get("/",home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search",search);





export default rootRouter;
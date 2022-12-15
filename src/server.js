
import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";

const app =express();
const logger = morgan("dev");

app.set("view engine", "pug"); 
app.set("views",process.cwd() + "/src/views");
app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
    });
app.use(logger);
app.use(express.urlencoded({ extended:true }));  // HTML form 을 이해하고 JS 오브젝트로 통역해줌 
app.use(express.json());

app.use( 
    session({
        secret:process.env.COOKIRE_SECRET,
        resave:false,
        saveUninitialized:false,  // 세션을 수정할때만 DB에 저장 하고 쿠키를 넘겨줌 === 로그인한 유저들에게만 쿠키를줌 
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),// 세션정보를 db에 넣어줌 
     }) 
);

app.use(flash());
app.use(localsMiddleware);
app.use("/uploads",express.static("uploads"));
app.use("/static",express.static("assets"));
app.use("/",rootRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);
app.use("/api",apiRouter);

export default app;
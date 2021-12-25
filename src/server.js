import "./db";
import session from "express-session";
import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middleware";
import mapRouter from "./routers/mapRouter";


const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const fs = require('fs');
const path = require('path');
const io = socket(server);
const app = express();
// 여기서부터 코드작성가능 express application이 생성되고 난 후!
const logger = morgan("dev")

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", process.cwd() + "/src/views");

app.use(express.static('static'));
app.use(express.static('node_modules'));
app.use(logger);
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: "Hello!",
    resave:"true",
    saveUninitialized: true,
}))


// 라우터 만들기!
//  use 다음에 get 순서 중요 !! use가 뒤에있으면 작동하지 않음 
//  use는 어떤 url에서든 항상 작동함!!
// app.get("/",여긴 함수자리!!)
app.get("/add-one",(req,res,next)=>{
    req.session.potato += 1;   
    return res.send(`${req.session.id}\n${req.session.potato}`)
})
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/map", mapRouter);

// 여기까지!
export default app;



import  express  from "express";
import { postJoin, getJoin,getLogin, postLogin, home,login2 } from "../controllers/userController"

const rootRouter = express.Router();

rootRouter.get("/",home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/login2",login2);


export default rootRouter;
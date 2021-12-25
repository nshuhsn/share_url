import express from "express";
import { map} from "../controllers/mapController";

const mapRouter = express.Router();


mapRouter.get("/:id([0-9a-f]{24})", map);


export default mapRouter;
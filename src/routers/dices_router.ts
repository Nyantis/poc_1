import controllersDices from "../controllers/dices_controllers";
import { Request, Response, Router } from "express";

const dicesRouter = Router()

dicesRouter.post("/roll", controllersDices.roll);

export { dicesRouter }
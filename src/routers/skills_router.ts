import { validateBody } from "../middlewares/validation-middleware";
import controllersSkills from "../controllers/skills_controllers";
import { Request, Response, Router } from "express";

const skillsRouter = Router()

skillsRouter.post("/new", validateBody ,controllersSkills.create);
skillsRouter.get("/retrieve/:id", controllersSkills.getById);
skillsRouter.put("/change/:id", controllersSkills.updateOneById);
skillsRouter.delete("/delete/:id", controllersSkills.deleteOneById);

export { skillsRouter }
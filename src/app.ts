import dotenv from "dotenv";
import express from "express";
import cors from 'cors';


import { skillsRouter, dicesRouter } from "./routers/index";
import { handleApplicationErrors } from './middlewares/error-handling-middleware';

dotenv.config();
const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/skill', skillsRouter)
  .use("/dice", dicesRouter)
  .use(handleApplicationErrors)

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
import express from "express";
import path from "path";
import 'dotenv/config';
import pug from 'pug';
import { router } from "./routes/route.js";
const app = express();
app.set("views",'views')
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));
app.use(router);


export { app };

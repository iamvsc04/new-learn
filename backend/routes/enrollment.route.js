import express from "express";
import authorizeToken from "../middleware/authorizetoken.middleware.js";

const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import {
  enrollCourse,
  unEnrollCourse,
} from "../controllers/enrollment.controller.js";

route.use(authorizeToken);
route.post("/:id", enrollCourse);
route.delete("/:id", unEnrollCourse);
export default route;

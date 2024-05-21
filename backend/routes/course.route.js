import express from "express";
const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import {
  getCourse,
  getCourseById,
  getCourseByCriteria,
} from "../controllers/course.controller.js";

route.get("/", getCourse);
route.get("/:id", getCourseById);
route.get("/search", getCourseByCriteria);

export default route;

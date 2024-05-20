import express from "express";
const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import {
  getProfile,
  editProfile,
  getProfileCourses,
  getProfileFavorites,
  getProfileCompleted,
} from "../controllers/profile.controller.js";

//User profile endpoints
route.get("", getProfile);
route.put("/edit", editProfile);
route.get("/enrolled", getProfileCourses);
route.get("/favorites", getProfileFavorites);
route.get("/completed", getProfileCompleted);
export default route;

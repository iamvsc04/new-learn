import express from "express";
import authorizeToken from "../middleware/authorizetoken.middleware.js";

const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import {
  addReview,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";
//review Endpoints

route.use(authorizeToken);
route.post("", addReview);
route.put("/:id", updateReview);
route.delete("/:id", deleteReview);
export default route;

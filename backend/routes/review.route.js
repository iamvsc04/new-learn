import express from "express";
import authorizeToken from "../middleware/authorizetoken.middleware.js";

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import {
  addReview,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";

router.use(authorizeToken);
router.post("", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);
export default router;

import "dotenv/config";
import express from "express";
import authRoute from "./routes/authentication.route.js";
import courseRoute from "./routes/course.route.js";
import enrollRoute from "./routes/enrollment.route.js";
import profileRoute from "./routes/profile.route.js";
import reviewRoute from "./routes/review.route.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute);
app.use("/api/profile", profileRoute);
app.use("/api/enrollments", enrollRoute);
app.use("/api/reviews", reviewRoute);

//mongoose.connect(process.env.MONGODB_URL);
mongoose.connect("mongodb://127.0.0.1:27017/new-learn");

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

app.get("/", (req, res) => {
  res.send("hi");
});

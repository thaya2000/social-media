import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
const app = express();

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/mern-project?authSource=admin`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => app.listen(5001, () => console.log("Listening")))
  .catch((error) => console.log(error));

//usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/posts", PostRoute);
app.use("/upload", UploadRoute);

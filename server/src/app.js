require("dotenv").config();

import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import cateRoute from "./routes/category";
import uploadRoute from "./routes/board";

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
var options = {
  inflate: true,
  limit: "1000kb",
  type: "application/octet-stream"
};
app.use(bodyParser.raw(options));
//route
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/category", cateRoute);
app.use("/api/board", uploadRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  let apiError = err;

  if (!err.status) {
    apiError = createError(err);
  }

  // set locals, only providing error in development
  res.locals.message = apiError.message;
  res.locals.error = process.env.NODE_ENV === "development" ? apiError : {};

  // render the error page
  return res.status(apiError.status).json({ message: apiError.message });
});

module.exports = app;

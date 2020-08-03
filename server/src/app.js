require("dotenv").config();

import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { stream, logger } from "./config/winston";
import * as Sentry from "@sentry/node";

import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import cateRoute from "./routes/category";
import blogRoute from "./routes/blog";

const app = express();
app.use(morgan("combined", { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "./uploads")));
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
app.use("/api/blog", blogRoute);

if (process.env.NODE_ENV === "pro") {
  //Sentry 캡쳐
  const Sentry = require("@sentry/node");
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  app.use(Sentry.Handlers.errorHandler());

  app.use(function onError(err, req, res, next) {
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });
  app.use(
    Sentry.Handlers.requestHandler({
      request: true,
      serverName: true,
      transaction: true,
      user: true,
      ip: true
    })
  );
  app.use(
    Sentry.Handlers.errorHandler({
      shouldHandleError(error) {
        // Capture all 404 and 500 errors
        if (error.status === 404 || error.status === 500) {
          return true;
        }
        return false;
      }
    })
  );
} else {
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

    if (process.env.NODE_ENV === "dev") {
      const errObj = {
        req: {
          headers: req.headers,
          query: req.query,
          body: req.body,
          route: req.route
        },
        error: {
          message: apiError.message,
          stack: apiError.stack,
          status: apiError.status
        },
        user: req.user
      };
      const today = new Date();
      logger.error(`${today}`, errObj);
    } else {
      res.locals.message = apiError.message;
      res.locals.error = apiError;
    }
    // render the error page
    return res.status(apiError.status).json({ message: apiError.message });
  });
}

module.exports = app;

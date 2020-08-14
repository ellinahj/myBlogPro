import dotenv from "dotenv";
import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import moment from "moment";
import * as Sentry from "@sentry/node";

import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import cateRoute from "./routes/category";
import blogRoute from "./routes/blog";

const app = express();
dotenv.config();
app.use(morgan("dev")); //combined,dev
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "./uploads")));
var options = {
  inflate: true,
  limit: "1000mb",
  type: "application/octet-stream"
};
app.use(bodyParser.raw(options));
//route
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/category", cateRoute);
app.use("/api/blog", blogRoute);

if (process.env.NODE_ENV === "dev") {
  app.use((err, req, res, next) => {
    let apiError = err;
    if (!err.status) {
      apiError = createError(err);
    }
    //Sentry 캡쳐
    const Sentry = require("@sentry/node");
    Sentry.init({ dsn: process.env.SENTRY_DSN });
    app.use(Sentry.Handlers.errorHandler());
    const { IncomingWebhook } = require("@slack/client");
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
    webhook.send(
      {
        attachments: [
          {
            color: "#303bfa",
            text: "err",
            fields: [
              {
                title: err.message,
                value: err.stack,
                short: false
              }
            ],
            ts: moment().unix()
          }
        ]
      },
      (err, res) => {
        if (err) {
          Sentry.captureException(err);
        }
      }
    );
  });
} else {
  // error handler
  app.use((err, req, res, next) => {
    let apiError = err;

    if (!err.status) {
      apiError = createError(err);
    }

    // set locals, only providing error in development
    res.locals.message = apiError.message;
    res.locals.error = process.env.NODE_ENV === "dev" ? apiError : {};

    // render the error page
    return res.status(apiError.status).json({
      message: apiError.message
    });
  });
}

module.exports = app;

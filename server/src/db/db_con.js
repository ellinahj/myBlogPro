import dotenv from "dotenv";
dotenv.config();
const mysql = require("mysql2");
const config = require("../config/db_info")[process.env.NODE_ENV];
const express = require("express");
const app = express();

module.exports = function() {
  return {
    init: function() {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      });
    },

    db_open: function(con) {
      con.connect(function(err) {
        console.log(process.env.NODE_ENV + "Mode");
        if (err) {
          console.info(err.stack, "db connect err");
          app.use(function(error, req, res, next) {
            res.json({ message: 500 });
          });
        } else {
          console.info("mysql is connected successfully.");
        }
      });
    }
  };
};

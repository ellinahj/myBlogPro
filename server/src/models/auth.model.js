const mysql_dbc = require("../db/db_con")();
const connection = mysql_dbc.init();
const bcrypt = require("bcrypt");
const saltRounds = 10;
import jwt from "jsonwebtoken";
import config from "../config/config";
mysql_dbc.db_open(connection);

const selectId = function(user_id) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0].count);
        }
      }
    );
  }).catch(err => {
    throw new Error(err);
  });
};

const insertUser = (user_id, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
      connection.query(
        "INSERT INTO mydiary.users (user_id,password) VALUES (?,?) ",
        [user_id, hashedPassword],
        function(err, result) {
          if (err) {
            reject(err);
          } else {
            if (result.insertId) {
              const cateName = "기본메뉴";
              connection.query(
                "INSERT INTO mydiary.category (user_id,title) VALUES (?,?) ",
                [result.insertId, cateName],
                function(err, lastResult) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(lastResult);
                  }
                }
              );
            }
          }
        }
      );
    });
  }).catch(err => {
    throw new Error(err);
  });
};
const login = (user_id, password) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT password FROM mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, storedPassword) {
        if (err) {
          reject(err);
        } else {
          if (storedPassword.length >= 1) {
            const hash = storedPassword[0].password;
            bcrypt.compare(password, hash, function(error, result) {
              if (error) {
                reject(error);
              } else {
                if (result === true) {
                  connection.query(
                    "SELECT * FROM mydiary.users WHERE user_id = ?",
                    [user_id],
                    function(err, result) {
                      if (err) {
                        reject(err);
                      } else if (result) {
                        const {
                          id,
                          user_id,
                          nickname,
                          profile_photo,
                          user_color,
                          main_title
                        } = result[0];
                        const token = jwt.sign(
                          { id, userId: user_id, userName: nickname },
                          config.jwtSecretKey,
                          {
                            expiresIn: "60m"
                          }
                        );
                        const sendResult = {
                          token,
                          nickname,
                          profile_photo,
                          user_color,
                          main_title,
                          loginState: "success"
                        };
                        resolve(sendResult); // 로그인성공
                      }
                    }
                  );
                } else {
                  const sendResult = {
                    loginState: "pwError"
                  };
                  resolve(sendResult); // 비번오류
                }
              }
            });
          } else {
            //아이디 오류
            const sendResult = {
              loginState: "idError"
            };
            resolve(sendResult);
          }
        }
      }
    );
  }).catch(err => {
    throw new Error(err);
  });
};
export { insertUser, selectId, login };

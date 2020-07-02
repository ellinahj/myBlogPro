const mysql_dbc = require("../config/db_con")();
const connection = mysql_dbc.init();
const bcrypt = require("bcrypt");
const saltRounds = 10;
import jwt from "jsonwebtoken";
import config from "../config/config";

mysql_dbc.db_open(connection);
const findId = function(user_id) {
  return new Promise((resolve, reject) => {
    console.log(user_id, "user id");
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          console.log(rows[0].count, "rows[0].count");
          return resolve(rows[0].count);
        }
      }
    );
  }).catch(err, console.log("find id return err ")); //*에러처리 필요;
};
const findNickname = function(nickname) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE nickname = ?",
      [nickname],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          console.log(rows[0].count, "rows[0].count");
          return resolve(rows[0].count);
        }
      }
    );
  });
};
const findDuplicatedUser = function(user_id, nickname) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE user_id = ? or nickname=?",
      [user_id, nickname],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          return resolve(rows[0].count);
        }
      }
    );
  });
};
const insertUser = (user_id, nickname, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
      console.log(hashedPassword, "has");
      connection.query(
        "INSERT INTO mydiary.users (user_id,nickname,password) VALUES (?,?,?) ",
        [user_id, nickname, hashedPassword],
        function(err, result) {
          if (err) {
            return reject(err);
          } else {
            return resolve(result);
          }
        }
      );
    });
  });
};
const login = (user_id, password) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT password FROM mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, storedPassword) {
        if (err) {
          return reject(err);
        } else {
          if (storedPassword.length >= 1) {
            const hash = storedPassword[0].password;
            bcrypt.compare(password, hash, function(error, result) {
              if (error) {
                return reject(error);
              } else {
                if (result === true) {
                  connection.query(
                    "SELECT * FROM mydiary.users WHERE user_id = ?",
                    [user_id],
                    function(err, result) {
                      if (err) {
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
                            expiresIn: "1m"
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
                        return resolve(sendResult); // 로그인성공
                      } else {
                        throw err;
                      }
                    }
                  );
                } else {
                  const sendResult = {
                    loginState: "pwError"
                  };
                  return resolve(sendResult); // 비번오류
                }
              }
            });
          } else {
            //아이디 오류
            const sendResult = {
              loginState: "idError"
            };
            return resolve(sendResult);
          }
        }
      }
    );
  });
};
export { findDuplicatedUser, insertUser, findId, findNickname, login };

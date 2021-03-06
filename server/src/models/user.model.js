var mysql_dbc = require("../db/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);
import bcrypt from "bcrypt";
const saltRounds = 10;

const selectNickname = nickname => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE nickname = ?",
      [nickname],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0].count);
        }
      }
    );
  });
};

const selectUser = user_id => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          const data = rows[0];
          delete data.password;
          return resolve(data);
        }
      }
    );
  });
};
const selectProfilePhoto = user_id => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select profile_photo from mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          const data = rows[0];
          resolve(data);
        }
      }
    );
  });
};
const updateUser = (user_id, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "update mydiary.users set nickname=?,main_title=?,user_color=?,profile_photo=?,user_font=? where user_id = ?",
      [
        data.nickname,
        data.main_title,
        data.user_color,
        data.profile_photo,
        data.user_font,
        user_id
      ],
      function(err, row) {
        if (err) {
          reject(err);
        } else {
          connection.query(
            "select * from mydiary.users WHERE user_id = ?",
            [user_id],
            function(err, rows) {
              if (err) {
                reject(err);
              } else {
                const data = rows[0];
                delete data.password;
                resolve(data);
              }
            }
          );
        }
      }
    );
  });
};
const selectPwd = (user_id, password) => {
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
              let sendResult = "";
              if (result === true) {
                const sendResult = "match";
                resolve(sendResult);
              } else {
                const sendResult = "mismatch";
                reject(sendResult);
              }
            });
          }
        }
      }
    );
  });
};
const checkAndInsertPwd = (user_id, password, newPassword) => {
  return new Promise((lastResolve, lastReject) => {
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
              if (result === true) {
                const pwdCheckResult = new Promise((resolve, reject) => {
                  bcrypt.hash(newPassword, saltRounds, function(
                    err,
                    hashedPassword
                  ) {
                    if (err) {
                    } else if (hashedPassword) {
                      connection.query(
                        "update mydiary.users set password=? where user_id=?",
                        [hashedPassword, user_id],
                        function(err, result) {
                          if (err) {
                            reject(err);
                          } else {
                            resolve(result);
                          }
                        }
                      );
                    }
                  });
                });
                pwdCheckResult
                  .then(res => {
                    lastResolve(res);
                  })
                  .catch(e => {
                    throw new Error("비번변경 에러");
                  });
              } else {
                const sendResult = "pwError";
                lastReject(sendResult);
              }
            });
          }
        }
      }
    );
  });
};
export {
  selectNickname,
  selectUser,
  selectProfilePhoto,
  updateUser,
  checkAndInsertPwd,
  selectPwd
};

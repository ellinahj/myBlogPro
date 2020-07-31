var mysql_dbc = require("../config/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);
import bcrypt from "bcrypt";
const saltRounds = 10;
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
          return reject(err);
        } else {
          const data = rows[0];
          return resolve(data);
        }
      }
    );
  });
};
const updateUser = (user_id, data) => {
  console.log(data, "data");
  return new Promise((resolve, reject) => {
    connection.query(
      "update mydiary.users set nickname=?,main_title=?,user_color=?,profile_photo=? where user_id = ?",
      [
        data.nickname,
        data.main_title,
        data.user_color,
        data.profile_photo,
        user_id
      ],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          const data = rows[0];
          return resolve(data);
        }
      }
    );
  });
};
const selectPwd = (user_id, password) => {
  console.log(user_id, password, "userid pwd");
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT password FROM mydiary.users WHERE user_id = ?",
      [user_id],
      function(err, storedPassword) {
        if (err) {
          console.log(err, "select pwd err");
        } else {
          if (storedPassword.length >= 1) {
            const hash = storedPassword[0].password;
            bcrypt.compare(password, hash, function(error, result) {
              let sendResult = "";
              if (result === true) {
                const sendResult = "match";
                resolve(sendResult);
              } else {
                console.log("불일치");
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
          console.log(err, "select pwd err");
        } else {
          if (storedPassword.length >= 1) {
            const hash = storedPassword[0].password;
            bcrypt.compare(password, hash, function(error, result) {
              if (result === true) {
                console.log(newPassword, "일치");
                const pwdCheckResult = new Promise((resolve, reject) => {
                  bcrypt.hash(newPassword, saltRounds, function(
                    err,
                    hashedPassword
                  ) {
                    if (err) {
                      console.log(err, " pwd hash err");
                    } else if (hashedPassword) {
                      console.log(hashedPassword, "has");
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
                    console.log(res, "res");
                    lastResolve(res);
                  })
                  .catch(e => console.log(e, "pwdCheckResult err"));
              } else {
                console.log("불일치");
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
  selectUser,
  selectProfilePhoto,
  updateUser,
  checkAndInsertPwd,
  selectPwd
};

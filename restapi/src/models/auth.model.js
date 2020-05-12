const mysql_dbc = require("../config/db_con")();
const connection = mysql_dbc.init();
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
          return resolve(rows[0].count);
        }
      }
    );
  });
};
const findNickname = function(nickname) {
  return new Promise((resolve, reject) => {
    console.log(nickname, "user nickname");
    connection.query(
      "SELECT count(*) as count FROM mydiary.users WHERE nickname = ?",
      [nickname],
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
const findDuplicatedUser = function(user_id, nickname) {
  return new Promise((resolve, reject) => {
    console.log(user_id, nickname, "user nick");
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
                  return resolve(2);
                } else {
                  return resolve(1);
                }
              }
            });
          } else {
            return resolve(0);
          }
        }
      }
    );
  });
};
export { findDuplicatedUser, insertUser, findId, findNickname, login };

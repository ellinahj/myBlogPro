var mysql_dbc = require("../config/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);

const getAllUserModel = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from users", function(err, rows) {
      if (err) {
        return reject(err);
      } else {
        return resolve(rows);
      }
    });
  });
};
const getUserModel = user_id => {
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
export { getAllUserModel, getUserModel };

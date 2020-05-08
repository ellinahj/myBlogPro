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
export { getAllUserModel };

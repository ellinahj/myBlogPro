var mysql_dbc = require("../config/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);

const getCateNumberModel = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select id, title from mydiary.category WHERE user_id = ?",
      [id],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          return resolve(rows);
        }
      }
    );
  });
};
const insertCategoryModel = (id, title) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select count(*) as count from mydiary.category WHERE user_id = ?",
      [id],
      function(err, rows) {
        if (err) {
          return reject(err);
        } else {
          if (rows[0].count < 3) {
            connection.query(
              "insert into mydiary.category(user_id,title) values(?,?)",
              [id, title],
              function(err, rows) {
                if (err) {
                  return reject(err);
                } else {
                  return resolve(rows.affectedRows);
                }
              }
            );
          } else {
            return resolve(0);
          }
        }
      }
    );
  });
};
export { getCateNumberModel, insertCategoryModel };

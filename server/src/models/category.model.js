var mysql_dbc = require("../config/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);

const selectCateNumber = id => {
  console.log(id, "id");
  return new Promise((resolve, reject) => {
    connection.query(
      "select id, title from mydiary.category WHERE user_id = ?",
      [id],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          console.log(rows, "rows");
          resolve(rows);
        }
      }
    );
  });
};
const insertCategory = (id, title) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from mydiary.category where id=?", [id], function(
      err,
      rows
    ) {
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
    });
  });
};
export { selectCateNumber, insertCategory };

var mysql_dbc = require("../config/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);

const selectBlog = (user_id, cate_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from mydiary.blog where user_id=? and cate_id=?;",
      [user_id, cate_id],
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
export { selectBlog };

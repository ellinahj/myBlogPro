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
const insertBlog = (data, files) => {
  console.log(files, "files");
  return new Promise((resolve, reject) => {
    connection.query(
      "insert into mydiary.blog (user_id,cate_id,write_date,date,title,comment,location_name,thumnail,first_image,second_image,third_image) VALUES (?,?,?,?,?,?,?,?,?,?,?) ",
      [
        7,
        14,
        "2020-07-01 01:43:56",
        "2020-07-01 01:43:56",
        "하이",
        "ㅎ~~~",
        "",
        files[0],
        files[0],
        files[1],
        files[2]
      ],
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
const selectSearchedBlog = (user_id, cate_id, value) => {
  const markedValue = "%" + value + "%";
  return new Promise((resolve, reject) => {
    console.log(markedValue, "marked");
    connection.query(
      "select * from mydiary.blog where user_id=? and cate_id=? and concat(title,location_name,comment) like ?",
      [user_id, cate_id, markedValue],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
};
export { selectBlog, insertBlog, selectSearchedBlog };

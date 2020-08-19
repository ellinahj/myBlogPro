var mysql_dbc = require("../db/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);
import moment from "moment";

const selectBlog = (user_id, cate_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from mydiary.blog where user_id=? and cate_id=? order by now_date desc;",
      [user_id, cate_id],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          return resolve(rows);
        }
      }
    );
  });
};
const insertBlog = (user_id, data) => {
  console.log(user_id, data, "model");
  return new Promise((resolve, reject) => {
    connection.query(
      "insert into mydiary.blog (user_id,cate_id,now_date,title,comment,first_image,second_image,third_image,location_name) VALUES (?,?,?,?,?,?,?,?,?) ",
      [
        user_id, //user
        data.cate, //cate

        moment().format("YYYY-MM-DD HH:mm"),
        data.title,
        data.comment,
        data.files.length > 0 && data.files[0] ? data.files[0] : null,
        data.files.length > 0 && data.files[1] ? data.files[1] : null,
        data.files.length > 0 && data.files[2] ? data.files[2] : null,
        data.location ? data.location : null
      ],
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
const selectSearchedBlog = (user_id, cate_id, value) => {
  const markedValue = "%" + value + "%";
  return new Promise((resolve, reject) => {
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
const deleteBlog = (user_id, blogId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "delete from mydiary.blog where user_id=? and id=?",
      [user_id, blogId],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          selectBlog(user_id, blogId).then(res => {
            console.log(res, "deleelelelelelllres");
            resolve(res);
          });
        }
      }
    );
  });
};
export { selectBlog, insertBlog, selectSearchedBlog, deleteBlog };

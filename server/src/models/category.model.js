var mysql_dbc = require("../db/db_con")();
var connection = mysql_dbc.init();
mysql_dbc.db_open(connection);

const selectCateNumber = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select id, title from mydiary.category WHERE user_id = ?",
      [id],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          // console.log(rows, "rows");
          resolve(rows);
        }
      }
    );
  });
};
const updateCategory = async (userId, cate) => {
  const cateArr = Object.values(cate);
  return Promise.all(
    cateArr.map(item => {
      return new Promise((resolve, reject) => {
        if (item.id) {
          connection.query(
            "update  mydiary.category set title=? where id=? and user_id=?",
            [item.title, item.id, userId],
            function(err, rows) {
              if (err) {
                reject(err);
              } else {
                resolve(rows);
              }
            }
          );
        } else {
          connection.query(
            "insert into mydiary.category(title,user_id) values(?,?) ",
            [item.title, userId],
            function(err, rows) {
              if (err) {
                reject(err);
              } else {
                resolve(rows);
              }
            }
          );
        }
      });
    })
  )
    .then(values => {
      console.log(values, "2");
      return new Promise((resolve, reject) => {
        connection.query(
          "select id, title from mydiary.category WHERE user_id = ?",
          [userId],
          function(err, rows) {
            if (err) {
              reject(err);
            } else {
              console.log(rows, "slect rows");
              resolve(rows);
            }
          }
        );
      });
    })
    .catch(err => {
      console.log(err, "all err");
      return err;
    });
};
const deleteCategory = (userId, cateId) => {
  console.log(cateId, userId, "delete");
  return new Promise((resolve, reject) => {
    connection.query(
      "delete from mydiary.category WHERE user_id = ? and id = ?",
      [userId, cateId],
      function(err, rows) {
        if (err) {
          reject(err);
        } else {
          connection.query(
            "select id, title from mydiary.category WHERE user_id = ?",
            [userId],
            function(err, rows) {
              if (err) {
                reject(err);
              } else {
                console.log(rows, "slect rows");
                resolve(rows);
              }
            }
          );
        }
      }
    );
  });
};
export { selectCateNumber, deleteCategory, updateCategory };

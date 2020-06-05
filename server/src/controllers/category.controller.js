import {
  getCateNumberModel,
  insertCategoryModel
} from "../models/category.model";
import { authCheck } from "../public/function";
const getCateNumber = (req, res, next) => {
  const token = req.headers["access-token"];
  const result = authCheck(token);
  try {
    if (result) {
      getCateNumberModel(result.id)
        .then(data => {
          if (data.length < 3) {
            res
              .status(200)
              .json({ status: 200, message: "ok", data })
              .end();
          } else {
            res
              .status(400)
              .json({ status: 400, message: "notOk", data })
              .end();
          }
        })
        .catch(err => console.log(err, "err"));
    } else {
      res
        .status(400)
        .json({ status: 400, message: " invalid token" })
        .end();
    }
  } catch {
    next(e);
  }
};
const insertCategory = (req, res, next) => {
  const token = req.headers["access-token"];
  const result = authCheck(token);
  const { title } = req.body;
  try {
    if (result) {
      insertCategoryModel(result.id, title)
        .then(data => {
          console.log(data.length, "data");
          if (data === 1) {
            res
              .status(200)
              .json({ status: 200, message: "success" })
              .end();
          } else {
            res
              .status(400)
              .json({ status: 400, message: "fail" })
              .end();
          }

          //   if (data.length < 3) {
          //     res
          //       .status(200)
          //       .json({ status: 200, message: "ok", data })
          //       .end();
          //   } else {
          //     res
          //       .status(400)
          //       .json({ status: 400, message: "notOk", data })
          //       .end();
          //   }
        })
        .catch(err => console.log(err, "err"));
    } else {
      res
        .status(400)
        .json({ status: 400, message: " invalid token" })
        .end();
    }
  } catch {
    next(e);
  }
};

export { getCateNumber, insertCategory };

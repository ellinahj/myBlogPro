import { selectCateNumber, insertCategory } from "../models/category.model";
import { authCheck } from "../public/function";
const getCateNumber = async (req, res, next) => {
  const token = req.headers.access_token;
  const result = await authCheck(token);
  // if (result === "empty token") {
  //   console.log("EMPTY ?");
  //   res
  //     .status(400)
  //     .json({ status: 400, message: " invalid token" })
  //     .end();
  // } else {
  if (result && result.id) {
    selectCateNumber(result.id)
      .then(data => {
        if (data) {
          res
            .status(200)
            .json({ status: 200, message: "ok", data: [...data] })
            .end();
        }
      })
      .catch(err => console.log(err, "cateNum err"));
  } else {
    res
      .status(400)
      .json({ status: 400 })
      .end();
  }
};
// };
const setCategory = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { title } = req.body;
  try {
    if (result) {
      insertCategory(result.id, title)
        .then(data => {
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

export { getCateNumber, setCategory };

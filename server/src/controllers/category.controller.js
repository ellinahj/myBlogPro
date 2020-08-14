import {
  selectCateNumber,
  deleteCategory,
  updateCategory
} from "../models/category.model";
import { authCheck } from "../public/function";

const getCateNumber = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result && result.id) {
      selectCateNumber(result.id)
        .then(data => {
          if (data) {
            res
              .status(200)
              .json({ status: 200, message: "ok", data: [...data] });
          }
        })
        .catch(err => {
          console.log(err, "cateNum err");
          next(err);
        });
    } else {
      res.status(400).json({ status: 400 });
    }
  } catch (e) {
    next(e);
  }
};
// };
const updateCate = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result && result.id) {
      updateCategory(result.id, req.body)
        .then(data => {
          console.log(data, "update data");
          if (data) {
            res
              .status(200)
              .json({ status: 200, message: "ok", data: [...data] });
          }
        })
        .catch(err => {
          console.log(err, "updateCategory err");
          next(err);
        });
    } else {
      res.status(400).json({ status: 400, message: " invalid token" });
    }
  } catch (e) {
    next(e);
  }
};
const delCategory = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    const { id } = req.body;

    if (result && result.id) {
      deleteCategory(result.id, id)
        .then(data => {
          console.log(data, "delete cate 카테고리에 딸린 이미지도 삭제");
          if (data) {
            res
              .status(200)
              .json({ status: 200, message: "ok", data: [...data] });
          }
        })
        .catch(err => {
          console.log(err, "deleteCategory err");
          next(err);
        });
    } else {
      res.status(400).json({ status: 400, message: " invalid token" });
    }
  } catch (e) {
    next(e);
  }
};

export { getCateNumber, delCategory, updateCate };

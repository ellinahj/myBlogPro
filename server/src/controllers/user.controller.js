import { getAllUserModel, getUserModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { authCheck } from "../public/function";

const getAllUser = (req, res, next) => {
  try {
    getAllUserModel()
      .then(data => res.json({ data }))
      .catch(err => console.log(err, "err"));
  } catch {
    next(e);
  }
};
const getUserInfo = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  if (result.userId) {
    getUserModel(result.userId)
      .then(data => {
        res.status(200).json({ status: 200, message: "ok", ...data });
      })
      .catch(err => console.log(err, "err"));
  } else {
    res.status(400).json({ status: 400, message: " invalid token" });
  }
};
export { getUserInfo };

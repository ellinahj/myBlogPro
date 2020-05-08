import { getAllUserModel } from "../models/user.model";

const getAllUser = (req, res, next) => {
  try {
    getAllUserModel()
      .then(data => res.json({ data }))
      .catch(err => console.log(err, "err"));
  } catch {
    next(e);
  }
};

export { getAllUser };

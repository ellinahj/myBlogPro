import jwt from "jsonwebtoken";
import config from "../config/config";
const authCheck = token => {
  if (!token) {
    return "not-exist token";
  } else {
    try {
      const result = jwt.verify(token, config.jwtSecretKey);
      return result;
    } catch (err) {
      console.log(err.message, "er message");
    }
  }
};

export { authCheck };

import jwt from "jsonwebtoken";
import config from "../config/config";
const authCheck = token => {
  if (!token) {
    return "empty token";
  } else {
    return new Promise(function(resolve, reject) {
      jwt.verify(token, config.jwtSecretKey, function(err, decoded) {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    }).catch(err => console.log(err.message, "in function jwt expired"));
  }
};

export { authCheck };

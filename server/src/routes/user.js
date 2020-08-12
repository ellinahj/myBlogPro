var express = require("express");
var router = express.Router();
import multer from "multer";

import {
  findNickname,
  getUserInfo,
  updateInfo,
  updatePwd,
  getPwd,
  storageS3
} from "../controllers/user.controller";

router.route("/nickname").post(findNickname);
router.route("/info").get(getUserInfo);
router
  .route("/update/info")
  .post(multer({ storage: storageS3 }).single("file"), updateInfo);
router.route("/pwd").post(getPwd);
router.route("/update/pwd").post(updatePwd);
// router.post("/write", multer({ storage: storageS3 }).array("file", 3), setBlog);
module.exports = router;

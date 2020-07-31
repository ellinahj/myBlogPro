var express = require("express");
var router = express.Router();

import {
  getUserInfo,
  updateInfo,
  updatePwd,
  getPwd
} from "../controllers/user.controller";

router.route("/info").get(getUserInfo);
router.route("/update/info").post(updateInfo);
router.route("/pwd").post(getPwd);
router.route("/update/pwd").post(updatePwd);

module.exports = router;

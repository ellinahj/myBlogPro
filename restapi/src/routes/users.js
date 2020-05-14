var express = require("express");
var router = express.Router();

import { getAllUser, getUserInfo } from "../controllers/user.controller";

/* GET users listing. */
router.route("/user").get(getAllUser);
router.route("/user/info").get(getUserInfo);

module.exports = router;

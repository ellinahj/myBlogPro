var express = require("express");
var router = express.Router();

import { getUserInfo } from "../controllers/user.controller";

/* GET users listing. */

router.route("/info").get(getUserInfo);

module.exports = router;

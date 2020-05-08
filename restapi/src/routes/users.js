var express = require("express");
var router = express.Router();

import { getAllUser } from "../controllers/user.controller";

/* GET users listing. */
router.route("/").get(getAllUser);

module.exports = router;

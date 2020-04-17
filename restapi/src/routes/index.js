var express = require("express");
import { index } from "../controllers/index.controller";
var router = express.Router();

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.json({ message: "Hello Express" });
// });
router.get("/", index);

module.exports = router;

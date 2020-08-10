import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const multer = require("multer");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import {
  getBlog,
  setBlog,
  getSearchedBlog,
  storageS3
} from "../controllers/blog.controller";

router.post("/write", multer({ storage: storageS3 }).array("file", 3), setBlog);
router.get("/read/:id", getBlog);
router.get("/read/search/:cateId/:value", getSearchedBlog);

module.exports = router;

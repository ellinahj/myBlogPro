import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const multer = require("multer");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
import path from "path";

import {
  getBlog,
  setBlog,
  getSearchedBlog,
  storageS3,
  removeBlog
} from "../controllers/blog.controller";

router.post(
  "/write",
  multer({
    storage: storageS3,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: function(req, file, callback) {
      const ext = path.extname(file.originalname);
      if (
        ext !== ".png" &&
        ext !== ".jpg" &&
        ext !== ".gif" &&
        ext !== ".jpeg"
      ) {
        return callback(null, false);
      }
      callback(null, true);
    }
  }).array("file", 3),
  setBlog
);
router.get("/read/:id", getBlog);
router.get("/read/search/:cateId/:value", getSearchedBlog);
router.post("/delete", removeBlog);

module.exports = router;

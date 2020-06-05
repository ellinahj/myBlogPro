import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import multer from "multer";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import { imgUpload } from "../controllers/board.controller";

fs.readdir("uploads/images", error => {
  if (error) {
    fs.mkdirSync("uploads/images");
  }
});
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage }).array("file", 3);
router.post("/imgUpload", (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      console.log(err, "unknown err");
    }
    console.log(req.files, "file");
  });
});
module.exports = router;

import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import {
  getBlog,
  setBlog,
  getSearchedBlog
} from "../controllers/blog.controller";

router.post("/write", setBlog);
router.get("/read/:id", getBlog);
router.get("/read/search/:cateId/:value", getSearchedBlog);

module.exports = router;

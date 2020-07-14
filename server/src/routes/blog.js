import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import { getBlog, setBlog } from "../controllers/blog.controller";

router.post("/write", setBlog);
router.get("/read/:id", getBlog);

module.exports = router;

import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
import {
  getCateNumber,
  delCategory,
  updateCate
} from "../controllers/category.controller";

router.get("/", getCateNumber);
router.post("/delete", delCategory);
router.post("/update", updateCate);
module.exports = router;

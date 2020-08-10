import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

import {
  createUser,
  findDuplicatedId,
  loginController
} from "../controllers/auth.controller";

router.post("/join", createUser);
router.post("/findId", findDuplicatedId);
router.post("/login", loginController);

module.exports = router;

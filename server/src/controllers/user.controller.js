import fs from "fs";
import multer from "multer";
import path from "path";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import {
  selectUser,
  selectNickname,
  updateUser,
  selectProfilePhoto,
  checkAndInsertPwd,
  selectPwd
} from "../models/user.model";
import { authCheck } from "../public/function";
import dotenv from "dotenv";
dotenv.config();
const ImgUrl = process.env.ImgUrl;

//s3
const s3 = new AWS.S3();
AWS.config.loadFromPath(__dirname + "/../config/aws.json");
export const storageS3 = multerS3({
  s3: s3,
  bucket: "myblogs3",
  metadata: function(req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function(req, file, cb) {
    cb(null, "images" + "/" + Date.now().toString() + file.originalname);
  },
  acl: "public-read"
});

const findNickname = async (req, res, next) => {
  try {
    //닉네임 중복확인
    const { nickname } = req.body;
    selectNickname(nickname)
      .then(count => {
        if (count >= 1) {
          res.status(200).send({ status: 200, message: "dupilicated" });
        } else if (count === 0) {
          res.status(200).send({ status: 200, message: "available" });
        }
      })
      .catch(e => {
        next(e);
      });
  } catch (e) {
    next(e);
  }
};
const getUserInfo = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result && result.id) {
      selectUser(result.userId)
        .then(data => {
          let profile_url;
          if (data.profile_photo !== null && data.profile_photo !== "") {
            profile_url = ImgUrl + data.profile_photo;
          } else if (data.profile_photo === null) {
            profile_url = data.profile_photo;
          }
          delete data.profile_photo;
          delete data.id;
          delete data.access_token;
          data = { ...data, profile_url };
          res.status(200).json({ ...data });
        })
        .catch(err => {
          console.log(err, "selectUser err");
          next(err);
        });
    } else {
      res.status(400).json({ status: 400 });
    }
  } catch (e) {
    next(e);
  }
};

const updateInfo = async (req, res, next) => {
  AWS.config.loadFromPath(__dirname + "/../config/aws.json");
  const s3 = new AWS.S3();
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result) {
      selectProfilePhoto(result.userId).then(async name => {
        //기존 프로필이미지가 있을경우
        if (name && name.profile_photo) {
          if (req.file) {
            const params = {
              Bucket: "myblogs3",
              Key: name.profile_photo
            };
            try {
              await s3.deleteObject(params).promise();
            } catch (e) {
              next(e);
            }
          }
          let { data } = req.body;
          data = JSON.parse(data);
          data["profile_photo"] = req.file ? req.file.key : name.profile_photo;
          updateUser(result.userId, data).then(dbData => {
            let profile_url = null;
            if (dbData.profile_photo !== null) {
              profile_url = ImgUrl + dbData.profile_photo;
            }
            delete dbData.profile_photo;
            res.status(200).json({ ...dbData, profile_url });
          });
        } else {
          //새가입자가 처음 프사 넣을경우, s3 삭제없이 바로 db에 넣는다
          let { data } = req.body;
          data = JSON.parse(data);
          data["profile_photo"] = req.file.key;
          updateUser(result.userId, data).then(data => {
            let profile_url = null;
            if (data.profile_photo !== null) {
              profile_url = ImgUrl + data.profile_photo;
            }
            delete data.profile_photo;
            res.status(200).json({ ...data, profile_url });
          });
        }
      });
    }
  } catch (e) {
    next(e);
  }
};
const getPwd = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    const { pwd } = req.body;
    console.log(pwd, "pwd");
    if (result) {
      selectPwd(result.userId, pwd)
        .then(data => {
          console.log(data, "data");
          res.status(200).json({ status: 200 });
        })
        .catch(err => {
          res.status(401).json({ message: "Mismatched pwd" });
          console.log(err, "selectUser err");
        });
    } else {
      res.status(400).json({ status: 400 });
    }
  } catch (e) {
    next(e);
  }
};
const updatePwd = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    const { prevPwd, newPwd } = req.body;
    if (result) {
      checkAndInsertPwd(result.userId, prevPwd, newPwd)
        .then(data => {
          console.log(data, "data");
          res.status(200).json({ status: 200 });
        })
        .catch(err => {
          res.status(401).json({ message: "pwdChangeFail" });
          next(err);
        });
    } else {
      res.status(400).json({ status: 400 });
    }
  } catch (e) {
    next(e);
  }
};
export { findNickname, updateInfo, getUserInfo, getPwd, updatePwd };

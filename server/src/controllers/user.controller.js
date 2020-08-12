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
          let profile_url = null;
          // console.log(data, "data");
          if (data.profile_photo !== null) {
            profile_url = ImgUrl + data.profile_photo;
          }
          console.log(profile_url, "profile_url");
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

//파일 업로드 관련
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
const upload = multer({ storage: storage }).any();
const dirPath = path.join(__dirname, "../uploads");

const updateInfo = async (req, res, next) => {
  AWS.config.loadFromPath(__dirname + "/../config/aws.json");
  const s3 = new AWS.S3();
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result) {
      if (req.file.key) {
        console.log(req.file.key, "key======");
        selectProfilePhoto(result.userId).then(name => {
          console.log(name.profile_photo, "name==========");
          if (name && name.profile_photo) {
            const params = {
              Bucket: "myblogs3",
              Key: name.profile_photo
            };
            s3.deleteObject(params, function(err, awsData) {
              if (err) {
                console.log(err);
              } else {
                console.log(awsData, "삭제성공");
                let { data } = req.body;
                console.log(data, "가져온 텍스트들");
                data = JSON.parse(data);
                data["profile_photo"] = req.file.key;
                console.log(data, "최종 바꿀값data");
                updateUser(result.userId, data).then(data => {
                  console.log(data, "바뀐값");
                  let profile_url = null;
                  if (data.profile_photo !== null) {
                    profile_url = ImgUrl + data.profile_photo;
                  }
                  delete data.profile_photo;
                  data = { ...data, profile_url };
                  console.log(data, "dataaaa");
                  res.status(200).json({ ...data });
                });
              }
            }); //
            // let { data } = fileRes.body;
            // data = JSON.parse(data);
            // const { profile_photo } = name;
            // data["profile_photo"] = profile_photo;
            // console.log(data, "data");
            // updateUser(result.userId, data).then(data => {
            //   let profile_url = null;
            //   if (data.profile_photo !== null) {
            //     profile_url =
            //       ImgUrl + data.profile_photo;
            //   }
            //   delete data.profile_photo;
            //   delete data.id;
            //   delete data.access_token;
            //   data = { ...data, profile_url };
            //   res.status(200).json({ ...data });
            // });
            // })
            // .catch(e => console.log(e, "select e"));
            // } else {
            //   let { data } = fileRes.body;
            //   data = JSON.parse(data);
            //   data["profile_photo"] = fileRes.files[0].filename;
            //   updateUser(result.userId, data)
            //     .then(data => {
            //       let profile_url = null;
            //       if (data.profile_photo !== null) {
            //         profile_url =
            //           "http://127.0.0.1:3000/images/" + data.profile_photo;
            //       }
            //       delete data.profile_photo;
            //       delete data.id;
            //       delete data.access_token;
            //       data = { ...data, profile_url };
            //       console.log(data, "dataaaa");
            //       res.status(200).json({ ...data });
            //     })
            //     .catch(e => console.log(e, "updateUser e"));
            // }
            // })
            // .catch(e => next(e));
          } else {
            let { data } = req.body;
            console.log(data, "가져온 텍스트들");
            data = JSON.parse(data);
            data["profile_photo"] = req.file.key;
            console.log(data, "최종 바꿀값data");
            updateUser(result.userId, data).then(data => {
              console.log(data, "바뀐값");
              let profile_url = null;
              if (data.profile_photo !== null) {
                profile_url = ImgUrl + data.profile_photo;
              }
              delete data.profile_photo;

              data = { ...data, profile_url };
              console.log(data, "dataaaa");
              res.status(200).json({ ...data });
            });
          }
        });
      }
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

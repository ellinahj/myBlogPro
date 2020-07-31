import jwt from "jsonwebtoken";
import config from "../config/config";
import fs from "fs";
import multer from "multer";
import path from "path";
import {
  selectUser,
  updateUser,
  selectProfilePhoto,
  checkAndInsertPwd,
  selectPwd
} from "../models/user.model";
import { authCheck } from "../public/function";

const getUserInfo = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  if (result) {
    selectUser(result.userId)
      .then(data => {
        let profile_url = null;
        console.log(data, "data");
        if (data.profile_photo !== null) {
          profile_url = "http://127.0.0.1:3001/images/" + data.profile_photo;
        }

        delete data.profile_photo;
        delete data.id;
        delete data.access_token;
        data = { ...data, profile_url };
        res.status(200).json({ ...data });
      })
      .catch(err => console.log(err, "selectUser err"));
  } else {
    res.status(400).json({ status: 400 });
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
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  if (result) {
    // console.log("in");
    // console.log(data, "body");

    const fileResult = new Promise((resolve, reject) => {
      //파일업로드
      upload(req, res, function(err) {
        if (err) {
          console.log(err, "upload err");
          return reject;
        }
        return resolve(req);
      });
    });
    fileResult.then(res => {
      if (res.files.length === 0) {
        selectProfilePhoto(result.userId).then(name => {
          let { data } = res.body;
          data = JSON.parse(data);
          const { profile_photo } = name;
          data["profile_photo"] = profile_photo;

          console.log(data, "dat");
          // console.log(data, "dataaa");
          updateUser(result.userId, data).then(res2 =>
            console.log(res2, "res2")
          );
        });
      } else {
        let { data } = res.body;
        data = JSON.parse(data);
        data["profile_photo"] = res.files[0].filename;

        console.log(data, "dat");
        // console.log(data, "  data");
        updateUser(result.userId, data).then(res2 => console.log(res2, "res2"));
      }
    });
    // if (data.profile_photo[0] === null) {
    //   selectProfilePhoto(result.userId).then(res => {
    //     const { profile_photo } = res;
    //     data.profile_photo = profile_photo;
    //     console.log(data, "dataaa");
    //     updateUser(result.userId, data).then(res2 => console.log(res2, "res2"));
    //   });
    // }

    // const profilePath = `/images/${body.profile}`;
    // fs.unlinkSync(dirPath + profilePath);

    // updateUser(body)
    //   .then(data => {console.log(data,'data');})
    //   .catch(err => console.log(err, "updateUser errr"));
  } else {
    res.status(400).json({ status: 400 });
  }
};
const getPwd = async (req, res, next) => {
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
};
const updatePwd = async (req, res, next) => {
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
        console.log(err, "selectUser err");
      });
  } else {
    res.status(400).json({ status: 400 });
  }
};
export { getUserInfo, updateInfo, updatePwd, getPwd };

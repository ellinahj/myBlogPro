import { authCheck } from "../public/function";
import {
  selectBlog,
  insertBlog,
  selectSearchedBlog,
  deleteBlog
} from "../models/blog.model";
import fs from "fs";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();
const ImgUrl = process.env.ImgUrl;

//파일 업로드 관련
fs.readdir("uploads/images", error => {
  if (error) {
    fs.mkdirSync("uploads/images");
  }
});

const upload = multer({ storage: storage }).any();
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

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
    //cb(null, Date.now().toString() );
  },
  acl: "public-read"
});
//

const setBlog = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result && result.id) {
      if (req) {
        const fileNameArr = [];
        const imgFile = req.files;

        console.log(imgFile, "imgRile");
        if (imgFile && imgFile.length > 0) {
          imgFile.forEach(item => {
            console.log(item, "item");
            fileNameArr.push(item.key);
          });
        }
        let { data } = req.body;
        console.log(data, "data1");
        data = JSON.parse(data);
        console.log(fileNameArr, "filenameArr");
        const transDate = moment(data.date).format("YYYY-MM-DD HH:mm");
        data.date = transDate;
        data.files = fileNameArr;
        console.log(data, "data2");
        insertBlog(result.id, data)
          .then(data => {
            console.log(data, "data");
            res.status(200).json({ status: 200 });
          })
          .catch(err => console.log(err, "file upload err"));
      } else {
        res.status(400).json({ status: 400 });
      }
    } else {
      res.status(400).json({ status: 400 });
    }
  } catch (e) {
    next(e);
  }
};
const getBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { id } = req.params;
  if (result) {
    selectBlog(result.id, id)
      .then(response => {
        const data = [...response];
        console.log(data, "data");
        const newData = data.map(item => {
          item.image_url = [
            ImgUrl + item.first_image,
            ImgUrl + item.second_image,
            ImgUrl + item.third_image
          ];
          return item;
        });
        res.status(200).json({ data, ...newData });
      })
      .catch(err => console.log(err, "get Blog err"));
  } else {
    res.status(400).json({ status: 400 });
  }
};

const getSearchedBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { cateId, value } = req.params;
  if (result) {
    selectSearchedBlog(result.id, cateId, value)
      .then(response => {
        console.log(response, "responese");
        const data = [...response];
        console.log(data, "data");
        // const url = "https://myblogs3.s3.ap-northeast-2.amazonaws.com/";
        const url = "http://127.0.0.1:3000/images/";
        const newData = data.map(item => {
          item.image_url = [
            url + item.first_image,
            url + item.second_image,
            url + item.third_image
          ];
          return item;
        });
        res.status(200).json({ data, ...newData });
      })
      .catch(err => console.log(err, "get Blog err"));
  } else {
    res
      .status(400)
      .json({ status: 400 })
      .end();
  }
};
const removeBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { id, image_url } = req.body;
  if (result && result.id) {
    const s3 = new AWS.S3();
    AWS.config.loadFromPath(__dirname + "/../config/aws.json");
    const deleteItems = [];
    const { image_url } = req.body;
    // const filteredUrl = image_url.filter(item => {
    //   item.substring(item.length - 4) !== "null" &&
    //     item.substring(item.length - 1) !== "0";
    // });

    image_url.forEach(el => {
      let split = el.split(".com/");
      const newSplit = split[1];
      deleteItems.push(newSplit);
    });

    const params = {
      Bucket: "myblogs3",
      Delete: {
        Objects: deleteItems,
        Quiet: false
      }
    };

    s3.deleteObjects(params, function(err, data) {
      if (err) console.log(err);
      else console.log("Success delete", data);
    });
    res.json({
      message: "images deleted",
      items: deleteItems
    });

    console.log(id, "data");

    deleteBlog(result.id, req.body.id)
      .then(result => {
        console.log(result, "result");
        res
          .status(200)
          .json({ message: "deleted" })
          .end();
      })
      .catch(err => console.log(err, "del Blog err"));
  } else {
    res
      .status(400)
      .json({ status: 400 })
      .end();
  }
};
export { getBlog, setBlog, getSearchedBlog, removeBlog };

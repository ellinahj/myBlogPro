import { authCheck } from "../public/function";
import {
  selectBlog,
  insertBlog,
  selectSearchedBlog,
  deleteBlog
} from "../models/blog.model";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import moment from "moment";

dotenv.config();
const ImgUrl = process.env.ImgUrl;

//s3
const s3 = new AWS.S3();
AWS.config.loadFromPath(__dirname + "/../config/aws.json");

export const storageS3 = multerS3({
  s3: s3,
  bucket: "myblogs3",
  // metadata: function(req, file, cb) {
  //   cb(null, { fieldName: file.fieldname });
  // },
  key: function(req, file, cb) {
    cb(null, "images" + "/" + Date.now().toString() + file.originalname);
  },
  acl: "public-read"
});

const setBlog = async (req, res, next) => {
  try {
    const token = req.headers["access_token"];
    const result = await authCheck(token);
    if (result && result.id) {
      if (req) {
        const fileNameArr = [];
        const imgFile = req.files;
        if (imgFile && imgFile.length > 0) {
          imgFile.forEach(item => {
            fileNameArr.push(item.key);
          });
        }
        let { data } = req.body;
        data = JSON.parse(data);
        const transDate = moment(data.date).format("YYYY-MM-DD HH:mm");
        data.date = transDate;
        data.files = fileNameArr;
        insertBlog(result.id, data)
          .then(data => {
            console.log(data, "set blog data");
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
        console.log(response, "response");
        const data = [...response];
        const newData = data.map(item => {
          const arr = [item.first_image, item.second_image, item.third_image];
          const notNullName = arr.filter(i => i !== null);
          const newImgArr = notNullName.map(name => ImgUrl + name);
          item.image_url = newImgArr;
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
  console.log(cateId, value, "cate valeu");
  if (result) {
    selectSearchedBlog(result.id, cateId, value)
      .then(response => {
        if (response) {
          const data = [...response];
          const newData = data.map(item => {
            const arr = [item.first_image, item.second_image, item.third_image];
            const notNullName = arr.filter(i => i !== null);
            const newImgArr = notNullName.map(name => ImgUrl + name);
            item.image_url = newImgArr;
            return item;
          });
          res.status(200).json({ data, ...newData });
        } else {
          res.status(200).json({ response });
        }
      })
      .catch(err => {
        console.log(err, "get Blog err");
        next(err);
      });
  } else {
    res.status(400).json({ status: 400 });
  }
};
const removeBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { id, image_url } = req.body;
  const s3 = new AWS.S3();
  AWS.config.loadFromPath(__dirname + "/../config/aws.json");
  if (result && result.id) {
    console.log(image_url, "imageurl");
    if (image_url.length > 0) {
      //삭제할 이미지가 있을때
      console.log(image_url, "image");
      const deleteItems = [];
      const notNullImgArr = image_url.filter(i => i !== null);
      console.log(notNullImgArr, "notNullImgArr");
      notNullImgArr.forEach(el => {
        let split = el.split(".com/");
        const newSplit = split[1];
        deleteItems.push({ Key: newSplit });
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
        else {
          deleteBlog(result.id, req.body.id)
            .then(result => {
              console.log(result, "delete result");
              res.status(200).json({ status: 200, message: "deleted" });
            })
            .catch(err => {
              console.log(err, "del Blog err");
              next(e);
            });
        }
      });
    } else {
      deleteBlog(result.id, req.body.id)
        .then(result => {
          console.log(result, "delete result");
          res.status(200).json({ status: 200, message: "deleted" });
        })
        .catch(err => {
          console.log(err, "del Blog err");
          next(e);
        });
    }
  } else {
    res.status(400).json({ status: 400 });
  }
};
export { getBlog, setBlog, getSearchedBlog, removeBlog };

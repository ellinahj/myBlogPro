import { authCheck } from "../public/function";
import {
  selectBlog,
  insertBlog,
  selectSearchedBlog
} from "../models/blog.model";
import fs from "fs";
import multer from "multer";

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

const setBlog = async (req, res, next) => {
  console.log(req.body, "body");
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  if (result && result.id) {
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
    fileResult
      .then(res => {
        //파일이름 추출
        if (res) {
          const fileNameArr = [];
          const imgFile = req.files;
          if (imgFile && imgFile.length > 0) {
            imgFile.forEach(item => {
              fileNameArr.push(item.filename);
            });
          }
          const { data } = res.body;
          console.log(fileNameArr, "filenameArr");
          insertBlog(data, fileNameArr)
            .then(res => {
              console.log(res, "file upload성공");
            })
            .catch(err => console.log(err));
        }
      })
      .catch(e => console.log(e, "fileUpload err"));
  }
};
const getBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { id } = req.params;

  if (result) {
    selectBlog(result.id, id)
      .then(response => {
        console.log(result.id, id, "id cateid");
        const data = [...response];
        for (let i = 0; i < data.length; i++) {
          if (data[i].first_image !== null) {
            const url = "http://127.0.0.1:3001/images/" + data[i].first_image;
            data[i].first_image = url;
          }
        }
        res
          .status(200)
          .json({ data })
          .end();
      })
      .catch(err => console.log(err, "get Blog err"));
  } else {
    res
      .status(400)
      .json({ status: 400 })
      .end();
  }
};
const getSearchedBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { cateId, value } = req.params;
  if (result) {
    selectSearchedBlog(result.id, cateId, value)
      .then(response => {
        console.log(result.id, cateId, value, "id cateid");
        console.log(response, "responese");
        const data = [...response];
        for (let i = 0; i < data.length; i++) {
          if (data[i].first_image) {
            const url = "http://127.0.0.1:3001/images/" + data[i].first_image;
            data[i].first_image = url;
          }
        }
        res
          .status(200)
          .json({ data })
          .end();
      })
      .catch(err => console.log(err, "get Blog err"));
  } else {
    res
      .status(400)
      .json({ status: 400 })
      .end();
  }
};
export { getBlog, setBlog, getSearchedBlog };

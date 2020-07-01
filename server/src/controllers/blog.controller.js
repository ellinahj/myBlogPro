import { authCheck } from "../public/function";
import { selectBlog } from "../models/blog.model";
const imgUpload = (req, res, next) => {};
const setBlog = (req, res, next) => {};
const getBlog = async (req, res, next) => {
  const token = req.headers["access_token"];
  const result = await authCheck(token);
  const { id } = req.params;

  if (result) {
    selectBlog(result.id, id) //id:
      .then(response => {
        console.log(result.id, id, "id cateid");
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
export { imgUpload, getBlog, setBlog };

import dotenv from "dotenv";
dotenv.config();

import { insertUser, selectId, login } from "../models/auth.model";
const ImgUrl = process.env.ImgUrl;

//회원가입
const findDuplicatedId = (req, res, next) => {
  try {
    //아이디 중복확인
    const { user_id } = req.body;
    selectId(user_id)
      .then(count => {
        if (count >= 1) {
          // t.프론트 처리..
          res.status(400).send({ status: 400, message: "dupilicated" });
        } else {
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

const createUser = async (req, res, next) => {
  try {
    //회원 등록
    const { user_id, password } = req.body;
    console.log(user_id, password, "usr pas");
    // findDuplicatedUser(user_id, password)
    //   .then(count => {
    //     console.log(count, "count");
    //     if (count >= 1) {
    //       res.status(400).send({
    //         status: 400,
    //         message: "one of user_id,nickname is duplicated"
    //       });
    //     } else {
    //       console.log(user_id, nickname, password, "inini");
    insertUser(user_id, password)
      .then(data =>
        res.status(200).send({ status: 200, message: "join success" })
      )
      .catch(e => {
        console.log(e, "insertUser e");
        next(e);
      });
    //   }
    // })
  } catch (e) {
    next(e);
  }
};
const loginController = (req, res, next) => {
  try {
    const { user_id, password } = req.body;
    if (user_id && password) {
      login(user_id, password)
        .then(result => {
          if (result.loginState === "idError") {
            //아이디 틀린경우
            res.status(401).json({ message: "IdORPwd" });
          } else if (result.loginState === "pwError") {
            //비번이 틀린경우
            res.status(401).json({ message: "IdORPwd" });
          } else if (result.loginState === "success") {
            //로그인 성공
            const {
              token,
              nickname,
              profile_photo,
              user_color,
              main_title
            } = result;

            let profile_url;
            if (profile_photo !== null && profile_url !== "") {
              profile_url = ImgUrl + profile_photo;
            } else {
              profile_url = profile_photo;
            }
            res.status(200).json({
              message: "ok",
              access_token: token,
              nickname,
              profile_url,
              user_color,
              main_title
            });
          }
        })
        .catch(err => {
          res.status(500).json({ message: "server error" });
          next(err);
        });
    } else {
      res.status(401).json({ message: "IdORPwd" });
    }
  } catch (e) {
    next(e);
  }
};

export { createUser, findDuplicatedId, loginController };

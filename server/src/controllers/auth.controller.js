import {
  findDuplicatedUser,
  insertUser,
  findId,
  findNickname,
  login
} from "../models/auth.model";

//회원가입
const findDuplicatedId = (req, res, next) => {
  //아이디 중복확인
  const { user_id } = req.body;
  findId(user_id).then(count => {
    if (count >= 1) {
      // t.프론트 처리..
      res.status(400).send({ status: 400, message: "dupilicated" });
    } else {
      res.status(200).send({ status: 200, message: "available" });
    }
  });
};
const findDuplicatedNickname = (req, res, next) => {
  //닉네임 중복확인
  const { nickname } = req.body;
  findNickname(nickname).then(count => {
    if (count >= 1) {
      // t.프론트 처리..
      res.status(400).send({ status: 400, message: "dupilicated" });
    } else {
      res.status(200).send({ status: 200, message: "available" });
    }
  });
};
const createUser = (req, res, next) => {
  //회원 등록
  const { user_id, nickname, password } = req.body;
  findDuplicatedUser(user_id, nickname)
    .then(count => {
      console.log(count, "count");
      if (count >= 1) {
        res.status(400).send({
          status: 400,
          message: "one of user_id,nickname is duplicated"
        });
      } else {
        console.log(user_id, nickname, password, "inini");
        insertUser(user_id, nickname, password)
          .then(data =>
            res.status(200).send({ status: 200, message: "register success" })
          )
          .catch(e => console.log(e, "e"));
      }
    })
    .catch(err => console.log(err, "err"));
};
const loginController = (req, res, next) => {
  const { user_id, password } = req.body;
  if (user_id && password) {
    login(user_id, password)
      .then(result => {
        if (result.loginState === "idError") {
          //아이디 틀린경우
          res
            .status(401)
            .json({ message: "non-existent ID" })
            .end();
        } else if (result.loginState === "pwError") {
          //비번이 틀린경우
          res
            .status(401)
            .json({ message: "incorrect password" })
            .end();
        } else if (result.loginState === "success") {
          //로그인 성공
          const {
            token,
            nickname,
            profile_photo,
            user_color,
            main_title
          } = result;
          const profile_url = "http://127.0.0.1:3001/images/" + profile_photo;
          res
            .status(200)
            .json({
              message: "ok",
              access_token: token,
              nickname,
              profile_url,
              user_color,
              main_title
            })
            .end();
        }
      })
      .catch(err => console.log(err, "login model error"));
  }
};

export {
  createUser,
  findDuplicatedId,
  findDuplicatedNickname,
  loginController
};

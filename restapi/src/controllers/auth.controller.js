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
    console.log(count, "count");
    if (count >= 1) {
      // t.프론트 처리..
      res.status(404).send({ status: 404, message: "dupilicated" });
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
      res.status(404).send({ status: 404, message: "dupilicated" });
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
        // t.프론트 처리..
        res.status(404).send({
          status: 404,
          message: "one of user_id,nickname is duplicated"
        });
      } else {
        console.log(user_id, nickname, password, "inini");
        insertUser(user_id, nickname, password)
          .then(data => console.log(data, "2data"))
          .catch(e => console.log(e, "e"));
        res.status(200).send({ status: 200, message: "register success" });
      }
    })
    .catch(err => console.log(err, "err"));
};
const loginController = (req, res, next) => {
  const { user_id, password } = req.body;
  login(user_id, password)
    .then(result => {
      if (result === 0) {
        //아이디 틀린경우
        res
          .status(404)
          .json({ status: 404, message: "non-existent ID" })
          .end();
      } else if (result === 1) {
        //비번이 틀린경우
        res
          .status(404)
          .json({ status: 404, message: "incorrect password" })
          .end();
      } else if (result === 2) {
        //로그인 성공
        res
          .status(200)
          .json({ status: 200, message: "register success" })
          .end();
      }
    })
    .catch(err => console.log(err, "login model error"));
};

export {
  createUser,
  findDuplicatedId,
  findDuplicatedNickname,
  loginController
};

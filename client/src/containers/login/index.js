import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import store from '../../store';
import { setUserInfo, setLogin } from '../../actions/base';
import auth from '../../api/auth';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();
  const pwValue = useRef(null);
  const userLogin = () => {
    const data = { user_id: id, password: pw };
    auth
      .login(data)
      .then(res => {
        if (res.status < 300) {
          const token = res.data.access_token;
          localStorage.setItem('mydiary_token', token);
          store.dispatch(setLogin(true));
          store.dispatch(setUserInfo(res.data));
          alert(' 로그인되었습니다.');
        } else if (res.status === 401) {
          alert('400 여기는 안들어오지?');
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          alert('아이디나 비밀번호를 확인해주세요.');
        } else {
          alert('서버접속이 원활하지 않습니다.');
        }
      });
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      login();
    }
  };
  const showPw = () => {
    if (pwValue.current.type === 'password') {
      pwValue.current.type = 'text';
    } else {
      pwValue.current.type = 'password';
    }
  };
  return (
    <Container>
      <InputWrap>
        <Title>로그인</Title>
        <input name="id" value={id} onChange={e => setId(e.target.value)}></input>
        <input
          name="pw"
          type="password"
          ref={pwValue}
          onKeyUp={enterKey}
          value={pw}
          onChange={e => setPw(e.target.value)}
        ></input>
        <CheckBoxCon>
          비밀번호 표시
          <CheckBox type="checkbox" onClick={showPw} />
        </CheckBoxCon>
        <LoginBtn onClick={userLogin}>로그인</LoginBtn>
        <BottomWrap>
          <PwdCon>비밀번호를 잊으셨나요?</PwdCon>
          <JoinCon>회원가입</JoinCon>
        </BottomWrap>
      </InputWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputWrap = styled.div`
  width: 300px;
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 15px;
    padding-left: 10px;
    font-size: 17px;
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  font-size: 15px;
  background: #ddd;
  text-align: center;
  line-height: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  border: none;
  font-family: 'Nanum Myeongjo', serif;
`;
const Title = styled.div`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 30px;
`;
const PwdCon = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
  cursor: pointer;
`;

const JoinCon = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
  cursor: pointer;
`;
const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckBoxCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const CheckBox = styled.input`
  width: 20px !important;
  margin-bottom: 0 !important;
  margin-left: 20px;
`;

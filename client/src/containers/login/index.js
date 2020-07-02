import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import store from '../../store';
import { setUserInfo, setLogin, setThemeColor } from '../../actions/base';
import { login } from '../../api/auth';

export default function LoginContainer() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();
  const pwValue = useRef(null);
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);

  useEffect(() => {
    isLoggedIn && Router.push('/blog');
  }, []);

  const userLogin = () => {
    const data = { user_id: id, password: pw };
    login(data).then(res => {
      console.log(res, 'login res login');
      if (res.status < 300) {
        const token = res.data.access_token;
        localStorage.setItem('mydiary_token', token);
        store.dispatch(setUserInfo(res.data));
        store.dispatch(setThemeColor(res.data.user_color));
        alert(' 로그인되었습니다.');
        Router.push('/blog');
      }
    });
  };

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      userLogin();
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

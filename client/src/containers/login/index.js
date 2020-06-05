import { useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  useEffect(() => {}, [id]);
  useEffect(() => {}, [pw]);

  const login = () => {
    const data = { user_id: id, password: pw };
    axios
      .post('http://127.0.0.1:3001/api/auth/login', data)
      .then(res => {
        if (res.status === 200) {
          const token = res.data.access_token;
          localStorage.setItem('mydiary_token', token);
          alert(' 로그인되었습니다.');
          Router.push('/');
        }
      })
      .catch(err => alert('아이디나 비밀번호를 확인해주세요.'));
  };

  return (
    <Container>
      <InputWrap>
        <Title>로그인</Title>
        <input name="id" value={id} onChange={e => setId(e.target.value)}></input>
        <input name="pw" type="password" value={pw} onChange={e => setPw(e.target.value)}></input>
        <LoginBtn onClick={login}>로그인</LoginBtn>
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

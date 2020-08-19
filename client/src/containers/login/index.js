import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import { setUserInfo, setThemeColor } from '../../actions/base';
import { login } from '../../api/auth';
import { theme } from '../../utils/theme';

export default function LoginContainer() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();
  const pwValue = useRef(null);
  const userColor = useSelector(state => state.common.userColor);

  const userLogin = () => {
    const data = { user_id: id, password: pw };
    login(data).then(res => {
      if (res.status === 200) {
        const token = res.data.access_token;
        localStorage.setItem('mydiary_token', token);
        dispatch(setUserInfo(res.data));
        dispatch(setThemeColor(res.data.user_color));

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

  const showPwd = () => {
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
        <SubTitle>아이디 *</SubTitle>
        <input name="id" value={id} onChange={e => setId(e.target.value)} autoComplete="off" />
        <SubTitle>비밀번호 *</SubTitle>
        <input
          name="pw"
          type="password"
          ref={pwValue}
          onKeyUp={enterKey}
          value={pw}
          onChange={e => setPw(e.target.value)}
          autoComplete="off"
        />
        <CheckBoxCon>
          비밀번호 표시
          <CheckBox type="checkbox" onClick={showPwd} />
        </CheckBoxCon>
        <LoginBtn onClick={userLogin} userColor={userColor}>
          로그인
        </LoginBtn>
        <BottomWrap>
          <JoinCon onClick={() => Router.push('/join')}>회원가입</JoinCon>
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
  background: ${props => props.userColor};
  text-align: center;
  line-height: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  border: none;
  border-radius: 3px;
`;
const Title = styled.div`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: ${theme.mFont};
  margin: 10px 0 10px;
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

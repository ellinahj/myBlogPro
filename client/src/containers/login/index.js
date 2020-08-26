import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import { setUserInfo, setThemeColor, setLoading } from '../../actions/base';
import { login, findId } from '../../api/auth';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const pwValue = useRef(null);

  const userColor = useSelector(state => state.common.userColor);
  const userInfo = useSelector(state => state.common.userInfo);

  useEffect(() => {
    if (userInfo !== undefined) {
      Router.push('/blog');
    }
  }, [userInfo]);

  const userLogin = () => {
    const data = { user_id: id, password: pw };
    dispatch(setLoading(true));
    login(data).then(res => {
      if (res.status === 200) {
        const token = res.data.access_token;
        localStorage.setItem('mydiary_token', token);
        dispatch(setUserInfo(res.data));
        dispatch(setThemeColor(res.data.user_color));
        dispatch(setLoading(false));
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

  const idRegex = /^[A-Za-z0-9+]{6,15}$/;
  function idRegCheck(value) {
    return idRegex.test(value);
  }

  const pwdRegex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  function pwRegCheck(value) {
    return pwdRegex.test(value);
  }

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
        <LoginBtn
          onClick={userLogin}
          userColor={userColor}
          disabled={!idRegCheck(id) || !pwRegCheck(pw)}
          allOk={idRegCheck(id) && pwRegCheck(pw)}
        >
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
    margin-bottom: 5px;
    padding-left: 10px;
    font-size: ${props => props.theme.theme.mFont};
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  font-size: ${props => props.theme.theme.sFont};
  background: ${props => (props.allOk ? '#e36f63' : '#ddd')};
  cursor: ${props => (props.allOk ? 'pointer' : 'not-allowed')};
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
  font-size: ${props => props.theme.theme.xlFont};
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: ${props => props.theme.theme.mFont};
  margin: 20px 0 10px;
`;
const JoinCon = styled.div`
  margin-bottom: 15px;
  font-size: ${props => props.theme.theme.ssFont};
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
